import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishPlaceListComponent } from './fish-place-list/fish-place-list.component';
import { FishPlaceAddComponent } from './fish-place-add/fish-place-add.component';
import { SharedModule } from 'src/app/shared';



@NgModule({
  declarations: [FishPlaceListComponent, FishPlaceAddComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FishPlaceListComponent, FishPlaceAddComponent]
})
export class FishPlaceModule { }
