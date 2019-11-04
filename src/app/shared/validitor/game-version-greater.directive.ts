import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

const VERSION_GREATER = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => GameVersionGreaterDirective),
  multi: true
};

@Directive({
  selector: '[appGameVersionGreater]',
  providers: [ VERSION_GREATER ]
})
export class GameVersionGreaterDirective implements Validator {
  @Input() appGameVersionGreater: string;

  constructor() {}

  validate(control: AbstractControl) {
    if (control.value && this.appGameVersionGreater && this.appGameVersionGreater >= control.value) {
      return { versionGreater: true };
    }
    return null;
  }
}
