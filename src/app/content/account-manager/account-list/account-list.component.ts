import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { AccountService } from 'src/app/service';
import { PagingBoxObj } from 'src/app/shared/component/paging-box';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: [ './account-list.component.scss' ]
})
export class AccountListComponent implements OnInit {
  public search = {
    name: '',
    date: { beginDate: '', endDate: '' }
  };
  public pageInfo = new PagingBoxObj(1, 0, 10, 0);
  public accounts = [];
  @ViewChild(NgForm, { static: true })
  searhFrom: NgForm;
  constructor(private accoutServ: AccountService, private confirmServ: ConfirmationService) {}

  ngOnInit() {
    this.searhFrom.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.pageInfo = new PagingBoxObj(1, 0, 10, 0);
      this.loadAccounts();
    });
  }

  loadAccounts() {
    this.accoutServ
      .getAccountList(
        this.search.name,
        this.search.date.beginDate,
        this.search.date.endDate,
        this.pageInfo.page,
        this.pageInfo.rows
      )
      .success((res) => {
        this.pageInfo.totalRecords = res.data.total;
        this.accounts = res.data.accounts;
      });
  }

  handlePageChange(pageInfo: PagingBoxObj) {
    this.pageInfo.page = pageInfo.page;
    this.loadAccounts();
  }

  handleResetClick(account) {
    this.confirmServ.confirm({
      message: '确认重置密码？',
      accept: () => {}
    });
  }

  handleChangeRole(account) {}
}
