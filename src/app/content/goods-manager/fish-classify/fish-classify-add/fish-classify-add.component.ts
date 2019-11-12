import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FishClassify, FishClassifyExtraDesc, FishClassifyService } from 'src/app/service';
import { clickOnce } from 'src/app/core/cache';
import { CommonFuncService } from 'src/app/core/common-func.service';
import { GlobalValidService } from 'mpr-form-valid';

@Component({
  selector: 'app-fish-classify-add',
  templateUrl: './fish-classify-add.component.html',
  styleUrls: [ './fish-classify-add.component.scss' ]
})
export class FishClassifyAddComponent implements OnInit {
  public fishClassify = new FishClassify();
  constructor(
    private activeRouter: ActivatedRoute,
    private fishClsServ: FishClassifyService,
    private globalValidServ: GlobalValidService
  ) {
    activeRouter.params.subscribe((param) => {
      if (param.id) {
        fishClsServ.getFishClassifyDetail(param.id).success((res) => {
          this.fishClassify = CommonFuncService.converAttrsToObject(res.data || []);
        });
      }
    });
  }

  ngOnInit() {}

  @clickOnce()
  handleAddClassifyDescClick() {
    const fishClsDesc = new FishClassifyExtraDesc();
    if (!this.fishClassify.extraDesc) {
      this.fishClassify.extraDesc = [ fishClsDesc ];
    } else {
      this.fishClassify.extraDesc.push(fishClsDesc);
    }
  }
}
