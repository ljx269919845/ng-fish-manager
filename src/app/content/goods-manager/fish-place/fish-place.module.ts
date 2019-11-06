import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishPlaceListComponent } from './fish-place-list/fish-place-list.component';
import { FishPlaceAddComponent } from './fish-place-add/fish-place-add.component';



@NgModule({
  declarations: [FishPlaceListComponent, FishPlaceAddComponent],
  imports: [
    CommonModule
  ]
})
export class FishPlaceModule { }
