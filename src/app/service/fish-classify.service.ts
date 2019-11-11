import { FishClassify } from 'src/app/service';
import { Injectable } from '@angular/core';
import { HttpJson } from '../core';

const ADD_FISH_CLASSIFY = '/product/add';

@Injectable()
export class FishClassifyService {
  constructor(private http: HttpJson) {}

  addFishClassify(fishClassify: FishClassify) {}
}
