import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountAddComponent } from './account-add/account-add.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'list',
    component: AccountListComponent
  },
  {
    path: 'add',
    component: AccountAddComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  declarations: [ AccountListComponent, AccountAddComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes), SharedModule ]
})
export class AccountManagerModule {}
