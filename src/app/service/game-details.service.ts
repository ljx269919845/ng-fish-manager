import { Injectable } from '@angular/core';
import { HttpJson } from '../core';

const GET_GAME_DETAILS_OVERVIEW_URL = '/game-management/v1/base-info/:id';

@Injectable({
  providedIn: 'root'
})
export class GameDetailsService {

  constructor(
    private http: HttpJson
  ) { }

  public getGameDetailsOverviewData(gameId: string) {
    return this.http.get(GET_GAME_DETAILS_OVERVIEW_URL, { id: gameId }, {});
  }

}
