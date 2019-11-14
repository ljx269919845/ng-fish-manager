import { Injectable } from '@angular/core';
import { HttpJson } from '../core';

const GET_ACCOUNT_LIST = '';

@Injectable()
export class AccountService {
  constructor(private http: HttpJson) {}

  getAccountList(name: string, beginDate: string, endDate: string, pageIndex: number, pageSize: number) {
    return this.http.get(GET_ACCOUNT_LIST, {}, { name, beginDate, endDate, pageIndex, pageSize });
  }

  changeAccountRole(userId: string, userRole: string) {}

  changePassword(userId: string, password: string) {}
}
