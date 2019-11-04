import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: RoleListComponent
  },
  {
    path: 'add',
    component: RoleAddComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  declarations: [ RoleListComponent, RoleAddComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class RoleManagerModule {}
