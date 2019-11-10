import { Component, OnInit } from '@angular/core';
import { FishClassify, FishClassifyExtraDesc } from 'src/app/service';
import { clickOnce } from 'src/app/core/cache';

@Component({
  selector: 'app-fish-classify-add',
  templateUrl: './fish-classify-add.component.html',
  styleUrls: ['./fish-classify-add.component.scss']
})
export class FishClassifyAddComponent implements OnInit {
  public fishClassify = new FishClassify();
  constructor() {}

  ngOnInit() {}

  @clickOnce()
  handleAddClassifyDescClick() {
    const fishClsDesc = new FishClassifyExtraDesc();
    if (!this.fishClassify.extraDesc) {
      this.fishClassify.extraDesc = [fishClsDesc];
    } else {
      this.fishClassify.extraDesc.push(fishClsDesc);
    }
  }
}
