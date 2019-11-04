import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { LoginService } from '../service';

const routes: Routes = [
  {
    path: 'content',
    component: ContentComponent,
    data: {
      label: '首页'
    },
    canActivate: [ LoginService ],
    children: [
      {
        path: 'account-manager',
        loadChildren: './account-manager/account-manager.module#AccountManagerModule'
      },
      {
        path: 'auth-manager',
        loadChildren: './auth-manager/auth-manager.module#AuthManagerModule'
      },
      {
        path: 'goods-manager',
        loadChildren: './goods-manager/goods-manager.module#GoodsManagerModule'
      },
      {
        path: 'role-manager',
        loadChildren: './role-manager/role-manager.module#RoleManagerModule'
      },
      {
        path: 'order-manager',
        loadChildren: './order-manager/order-manager.module#OrderManagerModule'
      },
      {
        path: '**',
        redirectTo: 'goods-manager'
      }
    ]
  }
];

@NgModule({
  declarations: [ ContentComponent, HeaderComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes), BreadcrumbModule, MenuModule ]
})
export class ContentModule {}
