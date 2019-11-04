import { GameReport, GameRelease, GameAudit } from './model/game.model';
import { Injectable } from '@angular/core';
import { HttpJson, HttpResponse, AppState } from '../core';
import { GameBasic } from './model';
import { httpCacheForEver } from '../core/cache';

export const POST_CREATE_GAME_BASE_INFO = '/v1/base-info';
export const PUT_UPDATE_GAME_BASE_INFO = '/v1/base-info';
export const GET_GAME_BASE_INFO = '/v1/base-info/{id}';
export const GET_GAME_NAME_LIST = '/v1/list-by-name/{name}';
export const GET_GAME_PROCESS_STATUS = '/v1/process';
export const GET_GAME_EXISTS = '/v1/exists/{name}/{platform}/{version}';
export const POST_GAME_REPORT = '/v1/report';
export const PUT_GAME_REPORT = '/v1/report';
export const GET_GAME_REPORT = '/v1/report/{gid}';
export const PUT_GAME_APPLY_AUDIT = '/v1/apply-audit';
export const PUT_GAME_PUBLISH = '/v1/release';
export const GET_GAME_PUBLISH = '/v1/release/{gid}';
export const GET_GAME_AUDIT = '/audit/v1/status';
export const POST_GAME_AUDIT_MANUAL = '/audit/v1/manualAudit';
export const GET_GAME_AUDIT_NEXT_STEP = '/audit/v1/submit';
export const GET_GAME_APPLY = '/v1/status';
export const POST_GAME_ALPPLY_ISLICODE = '/v1/apply';
export const GET_GAME_REPORT_TEMP_FILE = '/v1/templet';

const HTTP_GAME_PREFIX = '/game-management';

@Injectable({
  providedIn: 'root'
})
export class GameCreateUpdateService {
  constructor(private http: HttpJson, private stateServ: AppState) {}

  public createGameBaseInfo(baseInfo: GameBasic): HttpResponse {
    return this.http.post(this.getUrl(POST_CREATE_GAME_BASE_INFO), {}, {}, baseInfo);
  }

  public updateGameBaseInfo(baseInfo: GameBasic): HttpResponse {
    return this.http.put(this.getUrl(PUT_UPDATE_GAME_BASE_INFO), {}, {}, baseInfo);
  }

  public getGameBaseInfo(id: string) {
    return this.http.get(this.getUrl(GET_GAME_BASE_INFO), { id });
  }

  public getGameListByName(name: string, platform: string) {
    return this.http.get(
      this.getUrl(GET_GAME_NAME_LIST),
      { name },
      { platform, publisher: this.stateServ.get('publisher') }
    );
  }

  public applyAudit(baseInfo: GameBasic): HttpResponse {
    return this.http.put(this.getUrl(PUT_GAME_APPLY_AUDIT), {}, {}, baseInfo);
  }

  public getAuditInfo(gid: string) {
    return this.http.get(this.getUrl(GET_GAME_AUDIT), { gid }, { gid });
  }

  public getAuditNextStep(gid: string) {
    return this.http.get(this.getUrl(GET_GAME_AUDIT_NEXT_STEP), { gid }, { gid });
  }

  public changeGameAudit(auditInfo: GameAudit) {
    return this.http.post(this.getUrl(POST_GAME_AUDIT_MANUAL), {}, {}, auditInfo);
  }

  public getGameApplyInfo(gid: string) {
    return this.http.get(this.getUrl(GET_GAME_APPLY), {}, { gid });
  }

  public applyGameIsliCode(gid: string) {
    return this.http.post(this.getUrl(POST_GAME_ALPPLY_ISLICODE), {}, { gid }, {});
  }

  public checkGameExist(name: string, platform: string, version: string) {
    return this.http.get(this.getUrl(GET_GAME_EXISTS), { name, platform, version });
  }

  public createGameReport(reportInfo: GameReport) {
    return this.http.put(this.getUrl(POST_GAME_REPORT), {}, {}, reportInfo);
  }

  public updateGameReport(reportInfo: GameReport) {
    return this.http.post(this.getUrl(PUT_GAME_REPORT), {}, {}, reportInfo);
  }

  public getGameReportInfo(gid: string) {
    return this.http.get(this.getUrl(GET_GAME_REPORT), { gid });
  }

  @httpCacheForEver('getGameReportTemplate')
  public getGameReportTemplate() {
    return this.http.get(this.getUrl(GET_GAME_REPORT_TEMP_FILE));
  }

  public createGamePublish(publishInfo: GameRelease) {
    return this.http.put(this.getUrl(PUT_GAME_PUBLISH), {}, {}, publishInfo);
  }

  public getGamePublish(gid: string) {
    return this.http.get(this.getUrl(GET_GAME_PUBLISH), { gid });
  }

  private getUrl(url: string) {
    return HTTP_GAME_PREFIX + url;
  }
}
