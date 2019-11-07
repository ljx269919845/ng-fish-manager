import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsOnsaleComponent } from './goods-onsale/goods-onsale.component';
import { GoodsForsaleComponent } from './goods-forsale/goods-forsale.component';
import { Routes, RouterModule } from '@angular/router';
import { FishClassifyListComponent } from './fish-classify/fish-classify-list/fish-classify-list.component';
import { FishClassifyAddComponent } from './fish-classify/fish-classify-add/fish-classify-add.component';
import { FishPlaceListComponent } from './fish-place/fish-place-list/fish-place-list.component';
import { FishPlaceAddComponent } from './fish-place/fish-place-add/fish-place-add.component';
import { FishClassifyModule } from './fish-classify/fish-classify.module';
import { FishPlaceModule } from './fish-place/fish-place.module';

const routes: Routes = [
  {
    path: 'onsale',
    component: GoodsOnsaleComponent
  },
  {
    path: 'forsale',
    component: GoodsForsaleComponent
  },
  {
    path: 'classify-list',
    component: FishClassifyListComponent
  },
  {
    path: 'classify-add',
    component: FishClassifyAddComponent
  },
  {
    path: 'fish-place',
    component: FishPlaceListComponent
  },
  {
    path: 'fish-place-add',
    component: FishPlaceAddComponent
  },
  {
    path: '**',
    redirectTo: 'onsale'
  }
];

@NgModule({
  declarations: [GoodsOnsaleComponent, GoodsForsaleComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FishClassifyModule, FishPlaceModule]
})
export class GoodsManagerModule {}
