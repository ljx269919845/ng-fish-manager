import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ProgressBarModule } from 'primeng/progressbar';

import { PagingBoxComponent } from './paging-box';
import { PagingBoxChildrenComponent } from './paging-box/paging-box-children';
import { LoaingDataComponent } from './loaing-data/loaing-data.component';
import { DialogComponent } from './dialog/dialog.component';
import { PdfPreviewComponent } from './pdf-preview/pdf-preview.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BeginEndDateComponent } from './begin-end-date/begin-end-date.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, CalendarModule, ProgressBarModule ],
  declarations: [
    PagingBoxComponent,
    PagingBoxChildrenComponent,
    LoaingDataComponent,
    DialogComponent,
    PdfPreviewComponent,
    CalendarComponent,
    FileUploadComponent,
    BeginEndDateComponent
  ],
  exports: [
    PagingBoxComponent,
    PagingBoxChildrenComponent,
    LoaingDataComponent,
    DialogComponent,
    CalendarComponent,
    FileUploadComponent,
    BeginEndDateComponent
  ]
})
export class ComponentModule {}
