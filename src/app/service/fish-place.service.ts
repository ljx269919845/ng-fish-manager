import { FishPlace } from 'src/app/service';
import { Injectable } from '@angular/core';
import { HttpJson } from '../core';
import { CommonFuncService } from '../core/common-func.service';

const ADD_FISH_PLACE = '/v1/product/add';
const GET_FISH_PLACE = '/v1/product/{type}';
const DELETE_FISH_PLACE = '/v1/product/{id}/{type}';
const GET_FISH_PLACE_DETAIL = '/v1/product/{id}';

@Injectable()
export class FishPlaceService {
  constructor(private http: HttpJson) {}

  addFishPlace(fishPlace: FishPlace) {
    return this.http.post(ADD_FISH_PLACE, {}, {}, CommonFuncService.converToAttr(fishPlace));
  }

  getFishPlace(name: string, pageIndex: number, pageSize: number) {
    return this.http.get(GET_FISH_PLACE, { type: 'fish-place' }, { name, pageIndex, pageSize });
  }

  deleteFishPlace(productId: string) {
    return this.http.delete(DELETE_FISH_PLACE, { id: productId, type: 'fish-place' });
  }

  getFishPlaceDetail(productId: string) {
    return this.http.get(GET_FISH_PLACE_DETAIL, { id: productId });
  }
}
