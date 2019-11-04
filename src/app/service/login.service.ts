import { Injectable } from '@angular/core';

import { HttpJson, AppState } from '../core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

const POST_LOGIN_URL = '/game-management/account/v1/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpJson,
    private appState: AppState,
    private router: Router
  ) { }

  public login(username: string, password: string) {
    return this.http.post(POST_LOGIN_URL, {}, {}, { account: username, password })
      .after((res) => {
        console.log(res);
        if (res && res.success) {
          this.appState.set('user_login_success', '1');
          console.log(this.appState.get('user_login_success'));
        }
      });
  }

  public canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.checkLogin()) {
      this.router.navigate(['/login']);
      return false;
    }
    return this.checkLogin();
  }

  public checkLogin(): boolean {
    return this.appState.get('user_login_success') === '1';
  }

  public clearLogin() {
    this.appState.set('user_login_success', '0');
    this.appState.set('publisherName', '');
    this.appState.set('publisher', '');
  }

}
