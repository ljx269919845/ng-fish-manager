import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { PipeModule } from './pipe/pipe.module';
import { ComponentModule } from './component/component.module';
import { DirectiveModule } from './directive/directive.module';
import { ValiditorModule } from './validitor/validitor.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipeModule,
    ComponentModule,
    DirectiveModule,
    ValiditorModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    TableModule,
    FormsModule
  ],
  exports: [
    PipeModule,
    ComponentModule,
    DirectiveModule,
    ValiditorModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    TableModule,
    FormsModule
  ]
})
export class SharedModule {}
