import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthListComponent } from './auth-list/auth-list.component';
import { AuthAddComponent } from './auth-add/auth-add.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: AuthListComponent
  },
  {
    path: 'add',
    component: AuthAddComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  declarations: [ AuthListComponent, AuthAddComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class AuthManagerModule {}
