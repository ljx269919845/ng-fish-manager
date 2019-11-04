import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormValidModule } from 'mpr-form-valid';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormValidModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
