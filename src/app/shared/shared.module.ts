import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormValidModule } from 'mpr-form-valid';

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
    AccordionModule,
    FormsModule,
    FormValidModule,
    ButtonModule,
    ConfirmDialogModule
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
    AccordionModule,
    FormsModule,
    FormValidModule,
    ButtonModule,
    ConfirmDialogModule
  ]
})
export class SharedModule {}
