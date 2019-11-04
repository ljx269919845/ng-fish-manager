import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToDirective } from './scroll-to.directive';
import { ScrollAnchorDirective } from './scroll-anchor.directive';
import { ScrollService } from './scroll.service';

@NgModule({
  declarations: [ ScrollToDirective, ScrollAnchorDirective ],
  imports: [ CommonModule ],
  exports: [ ScrollToDirective, ScrollAnchorDirective ],
  providers: [ ScrollService ]
})
export class ScrollToModule {}
