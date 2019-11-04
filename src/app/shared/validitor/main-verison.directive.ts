import { Directive, Input, forwardRef, SimpleChanges, OnChanges } from '@angular/core';
import { AsyncValidator, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { GameCreateUpdateService } from 'src/app/service/game-create-update.service';
// import { PLATFORM_TYPE } from 'src/app/content/game-create-update/game-create-update.model';
import { SimpleGameVersion } from 'src/app/service';

const VERSION_GREATER = {
  provide: NG_ASYNC_VALIDATORS,
  useExisting: forwardRef(() => MainVerisonDirective),
  multi: true
};

@Directive({
  selector: '[appMainVerison]',
  providers: [ VERSION_GREATER ]
})
export class MainVerisonDirective implements AsyncValidator, OnChanges {
  @Input() gameName: string;
  @Input() platform: string;
  @Input() oldVersion: string;

  private control: AbstractControl;

  constructor(private gameServ: GameCreateUpdateService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    if (this.control && this.gameName && this.platform !== undefined && this.platform !== null) {
      this.control.updateValueAndValidity();
    }
  }

  validate(c: AbstractControl) {
    this.control = c;
    const mainVersion = ('' + c.value).split('.')[0];
    if (!mainVersion) {
      return Promise.resolve(null);
    }
    if (this.oldVersion && this.oldVersion === c.value) {
      return Promise.resolve(null);
    }
    if (!this.gameName) {
      return Promise.resolve({ nameRequired: true });
    }
    return new Promise((resolveFunc) => {
      this.gameServ.getGameListByName(this.gameName, '' + (this.platform || 1)).success((res) => {
        if (!res.data || !res.data.length) {
          resolveFunc(null);
          return;
        }
        if (Number(((res.data[0] || {}) as SimpleGameVersion).mainver) >= Number(mainVersion)) {
          resolveFunc({ maxVersion: { preVersion: res.data[0].mainver } });
        } else {
          resolveFunc(null);
        }
      });
    });
  }
}
