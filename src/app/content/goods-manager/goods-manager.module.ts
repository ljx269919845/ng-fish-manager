import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsOnsaleComponent } from './goods-onsale/goods-onsale.component';
import { GoodsForsaleComponent } from './goods-forsale/goods-forsale.component';
import { Routes, RouterModule } from '@angular/router';

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
    path: '**',
    redirectTo: 'onsale'
  }
];

@NgModule({
  declarations: [ GoodsOnsaleComponent, GoodsForsaleComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class GoodsManagerModule {}
