import { Injectable } from '@angular/core';

import { HttpJson } from '../core';

const GET_GAME_VERSION_URL = '/game-management/v1/base-info/version';

@Injectable({
  providedIn: 'root'
})
export class GameVersionService {

  constructor(
    private http: HttpJson
  ) { }

  public getGameVersionData(mid: string) {
    return this.http.get(GET_GAME_VERSION_URL, {}, { mid });
  }
}
