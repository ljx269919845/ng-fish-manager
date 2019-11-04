import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { ExpressComponent } from './express/express.component';

const routes: Routes = [
  {
    path: '/list',
    component: OrderListComponent
  },
  {
    path: '/express',
    component: ExpressComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  declarations: [ OrderListComponent, ExpressComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class OrderManagerModule {}
