import { FishClassify } from 'src/app/service';
import { Injectable } from '@angular/core';
import { HttpJson } from '../core';
import { CommonFuncService } from '../core/common-func.service';

const ADD_FISH_CLASSIFY = '/v1/product/add';
const GET_FISH_CLASSIFY = '/v1/product/{type}';
const DELETE_FISH_CLASSIFY = '/v1/product/{id}/{type}';
const GET_FISH_CLASSIFY_DETAIL = '/v1/product/{id}';

@Injectable()
export class FishClassifyService {
  constructor(private http: HttpJson) {}

  addFishClassify(fishClassify: FishClassify) {
    return this.http.post(ADD_FISH_CLASSIFY, {}, {}, CommonFuncService.converToAttr(fishClassify));
  }

  getFishClassify(name: string, pageIndex: number, pageSize: number) {
    return this.http.get(GET_FISH_CLASSIFY, { type: 'fish-classify' }, { name, pageIndex, pageSize });
  }

  deleteFishClassify(productId: string) {
    return this.http.delete(DELETE_FISH_CLASSIFY, { id: productId, type: 'fish-classify' });
  }

  getFishClassifyDetail(productId: string) {
    return this.http.get(GET_FISH_CLASSIFY_DETAIL, { id: productId });
  }
}
