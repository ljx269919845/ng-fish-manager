import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatternInputDirective } from './pattern-input.directive';
import { TrimDirective } from './trim.directive';
// import { PdfPreviewDirective } from './pdf-preview.directive';

@NgModule({
  declarations: [
    PatternInputDirective,
    TrimDirective
    // PdfPreviewDirective
  ],
  imports: [CommonModule],
  exports: [
    PatternInputDirective,
    TrimDirective
  ]
})
export class DirectiveModule { }
