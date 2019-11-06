import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishClassifyListComponent } from './fish-classify-list/fish-classify-list.component';
import { FishClassifyAddComponent } from './fish-classify-add/fish-classify-add.component';



@NgModule({
  declarations: [FishClassifyListComponent, FishClassifyAddComponent],
  imports: [
    CommonModule
  ]
})
export class FishClassifyModule { }
