import { Injectable } from '@angular/core';

import { HttpJson } from '../core';
import { WholeProcessSearchObj, PageParams } from './model';

const GET_GAME_LIST_URL = 'GET_GAME_LIST_URL';  // 全流程跟踪管控
const GET_GAME_LIST_TOTAL_URL = 'GET_GAME_LIST_TOTAL_URL';  // 全流程跟踪管控-数量
const GET_GAME_OVERVIEW_URL = 'GET_GAME_OVERVIEW_URL'; // 全流程跟踪管控-游戏详情
const GET_GAME_DATA_COLLECT_URL = 'GET_GAME_DATA_COLLECT_URL'; // 游戏全流程数据采集
const GET_GAME_DATA_APPROVAL_URL = 'GET_GAME_DATA_APPROVAL_URL'; // 游戏审批全流程
const GET_GAME_DATA_COLLECT_VERSION_URL = 'GET_GAME_DATA_COLLECT_VERSION_URL'; // 游戏全流程数据采集-版本

@Injectable({
  providedIn: 'root'
})
export class WholeProcessService {

  constructor(
    private http: HttpJson
  ) { }

  public getGameListTotal() {
    return this.http.get(GET_GAME_LIST_TOTAL_URL, {}, {});
  }

  public getGameListData(queryParams: WholeProcessSearchObj, pageParams: PageParams) {
    return this.http.get(GET_GAME_LIST_URL, {}, {});
    // return this.http.get(GET_GAME_LIST_URL, {}, Object.assign({}, queryParams, pageParams));
  }

  public getGameOverviewData(id: string) {
    return this.http.get(GET_GAME_OVERVIEW_URL, {}, {});
  }

  public getGameDataCollection(id: string) {
    return this.http.get(GET_GAME_DATA_COLLECT_URL, {}, {});
  }

  public getGameDataCollectionVersion(id: string) {
    return this.http.get(GET_GAME_DATA_COLLECT_VERSION_URL, {}, {});
  }

  public getGameDataApproval(id: string) {
    return this.http.get(GET_GAME_DATA_APPROVAL_URL, {}, {});
  }
}
