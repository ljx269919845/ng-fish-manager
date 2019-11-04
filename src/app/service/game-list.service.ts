import { Injectable } from '@angular/core';

import { HttpJson } from '../core';
import { GameListQueryParamsObj, PageParams } from './model';

const GET_GAME_LIST_URL = '/game-management/v1/base-info';            // 游戏列表
const GET_GAME_LIST_PROCESS_URL = '/game-management/v1/process/list';  // 游戏进程状态(列表页面传gid,详情页传mid)
const PUT_GAME_LIST_OBTAINED = '/game-management/v1/unrelease/:gid';   // 游戏下架

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  constructor(
    private http: HttpJson
  ) { }

  public getGameListData(queryParams: GameListQueryParamsObj, pageParams: PageParams) {
    return this.http.get(GET_GAME_LIST_URL, {}, Object.assign({}, queryParams, pageParams));
  }

  public getGameListProcessDetailData(gid: string) {
    return this.http.get(GET_GAME_LIST_PROCESS_URL, {}, { gid, pageRows: 999 });
  }

  public getGameDetailsProcessDetailData(mid: string, pageIndex: number, pageRows: number) {
    return this.http.get(GET_GAME_LIST_PROCESS_URL, {}, { mid, pageIndex, pageRows });
  }

  public postGameListObtained(id: string) {
    return this.http.put(PUT_GAME_LIST_OBTAINED, { gid: id }, {}, {});
  }

}
