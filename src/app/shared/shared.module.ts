import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeModule } from './pipe/pipe.module';
import { ComponentModule } from './component/component.module';
import { DirectiveModule } from './directive/directive.module';
import { ValiditorModule } from './validitor/validitor.module';

@NgModule({
  declarations: [],
  imports: [ CommonModule, PipeModule, ComponentModule, DirectiveModule, ValiditorModule ],
  exports: [ PipeModule, ComponentModule, DirectiveModule, ValiditorModule ]
})
export class SharedModule {}
