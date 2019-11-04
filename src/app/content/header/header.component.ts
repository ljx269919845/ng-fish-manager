import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { AppState } from '../../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public publisherName: string;

  constructor(
    private router: Router,
    private appState: AppState,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.publisherName = this.appState.get('publisherName');
  }

  /**
   * 返回首页
   */
  handleHomeClick() {
    this.router.navigate(['/content']);
  }

  /**
   * 退出
   */
  handleQuitClick() {
    this.router.navigate(['/login']);
    this.loginService.clearLogin();
  }

}
