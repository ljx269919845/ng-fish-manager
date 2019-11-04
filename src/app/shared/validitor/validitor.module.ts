import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameVersionGreaterDirective } from './game-version-greater.directive';
import { MainVerisonDirective } from './main-verison.directive';

@NgModule({
  declarations: [ GameVersionGreaterDirective, MainVerisonDirective ],
  imports: [ CommonModule ],
  exports: [ GameVersionGreaterDirective, MainVerisonDirective ]
})
export class ValiditorModule {}
