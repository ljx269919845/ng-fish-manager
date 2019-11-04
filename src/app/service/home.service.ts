import { Injectable } from '@angular/core';

import { HttpJson } from '../core';

const GET_GAME_OVERVIEW_URL = 'GET_GAME_OVERVIEW_URL';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpJson
  ) { }

  public getGameOverviewData() {
    return this.http.get(GET_GAME_OVERVIEW_URL, {}, {});
  }

}
