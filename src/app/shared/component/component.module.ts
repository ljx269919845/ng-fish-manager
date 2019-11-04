import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

import { PagingBoxComponent } from './paging-box';
import { PagingBoxChildrenComponent } from './paging-box/paging-box-children';
import { LoaingDataComponent } from './loaing-data/loaing-data.component';
import { DialogComponent } from './dialog/dialog.component';
import { PdfPreviewComponent } from './pdf-preview/pdf-preview.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, CalendarModule ],
  declarations: [
    PagingBoxComponent,
    PagingBoxChildrenComponent,
    LoaingDataComponent,
    DialogComponent,
    PdfPreviewComponent,
    CalendarComponent
  ],
  exports: [ PagingBoxComponent, PagingBoxChildrenComponent, LoaingDataComponent, DialogComponent, CalendarComponent ]
})
export class ComponentModule {}
