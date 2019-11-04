import { CommonType, DropDownOption } from './model/common.model';
import { Injectable } from '@angular/core';

import {
  HttpJson,
  ImageUploadData,
  HttpImageUpload,
  ImageVaildOptions,
  ValidFunc,
  FileUpload,
  AppState
} from '../core';
import { httpCacheForEver } from '../core/cache';
import { HttpMultiService } from '../core/http/http-multi.service';

export const GET_GAME_CLASSISFIES = '/game-management/v1/classification'; // 游戏类别
export const GET_GAME_PROCESS_STATUS = '/game-management/v1/process'; // 进程状态
export const GET_GAME_COUNT = '/game-management/v1/count/:publisher'; // 游戏统计
export const IAMGE_UPLOAD_PATH = '/game-management/file-upload/{flag}';
export const FILE_UPLOAD_PATH = '/game-management/file-upload/{flag}';
export const GET_ACCOUNT_DETAIL = '/game-management/account/v1/getDetailByUnificationId';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private http: HttpJson,
    private imageUploader: HttpImageUpload,
    private fileUploader: HttpMultiService,
    private appState: AppState
  ) {}

  /** 获取游戏分类 */
  @httpCacheForEver('common_getGamesClassifies')
  public getGamesClassifies() {
    return this.http.get(GET_GAME_CLASSISFIES).translate((data: Array<CommonType>) => {
      return (data || []).map((elem) => {
        return new DropDownOption(elem.value, elem.key);
      });
    });
  }

  /**
   * 获取游戏各个环节的状态值
   */
  @httpCacheForEver('common_getGameProcessStatus')
  public getGameProcessStatus() {
    return this.http.get(GET_GAME_PROCESS_STATUS).translate((res) => {
      const data = [ { pkey: '', pvalue: '全部进程', status: [] } ].concat(res);
      const gameStatusArray = (data || []).map((pElem) => {
        const dropdownData = (pElem.status || []).map((elem) => {
          return new DropDownOption(elem.value, elem.key, elem.detail);
        });
        const all = [ new DropDownOption('全部状态', '') ];
        console.log(new DropDownOption(pElem.pvalue, pElem.pkey, all.concat(dropdownData)));
        return new DropDownOption(pElem.pvalue, pElem.pkey, all.concat(dropdownData));
      });
      // const gameStatusObject = {};
      // gameStatusArray.forEach((elem) => {
      //   gameStatusObject[elem.value] = elem;
      // });
      return gameStatusArray;
    });
  }

  /**
   * 获取游戏统计数据
   */
  public getGameCount() {
    return this.http.get(GET_GAME_COUNT, { publisher: this.appState.get('publisher') }, {});
  }

  public getImageUploader(
    validFunc: ValidFunc,
    imageSize?: number,
    imageHeightWidth?: Array<{ width: number; height: number; max: boolean }>
  ): ImageUploadData {
    const imgSize = imageSize ? imageSize : 2 * 1024 * 1024;
    const imageUpload = new ImageUploadData(this.imageUploader, IAMGE_UPLOAD_PATH, 'file');
    imageUpload.setImageValidOptions(new ImageVaildOptions(validFunc, imgSize, imageHeightWidth));
    return imageUpload;
  }

  getUploader(): FileUpload {
    return new FileUpload(FILE_UPLOAD_PATH, 'file', this.fileUploader);
  }

  /** 获取账号详情 */
  @httpCacheForEver('getAccountDetail')
  getAccountDetail() {
    const unificationId = this.appState.get('publisher');
    if (!unificationId) {
      throw new Error('you must login first and there is no unificationId found');
    }
    return this.http.get(GET_ACCOUNT_DETAIL, {}, { unificationId }).translate((data) => {
      if (!data.publisherName) {
        data.publisherName = (data.name || '').replace(/\s/g, '') + (data.companyType || '').replace(/\s/g, '');
      }
      return data;
    });
  }
}
