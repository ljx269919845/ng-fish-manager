import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoginService } from '../../service/login.service';
import { GlobalValidService } from 'mpr-form-valid';
import { AppState, ResponseModel } from 'src/app/core';
import { clickWiatHttp } from '../../core/cache';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public errorMsg = {
    userName: {
      required: ''
    },
    passWord: {
      required: ''
    }
  };
  public userInfo = {
    username: '',
    password: ''
  };
  public errorFlag: string;

  @ViewChild(NgForm, { read: NgForm, static: true }) form: NgForm;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private globalValidServ: GlobalValidService,
    private stateServ: AppState
  ) { }

  ngOnInit() {
    this.loginService.clearLogin();
  }

  @clickWiatHttp('handleLoginClick')
  handleLoginClick() {
    if (this.globalValidServ.validAll()) {
      console.log(this.userInfo);
      this.loginService.login(this.userInfo.username, this.userInfo.password)
        .success((res) => {
          this.errorFlag = '';
          this.stateServ.set('publisherName', res.data && res.data.name);
          this.stateServ.set('publisher', res.data && res.data.unificationId);
          this.router.navigate(['/content']);
        }).error((res: ResponseModel) => {
          console.log(res);
          this.errorFlag = res.msg;
          this.router.navigate(['/login']);
        });
    }
  }
}
