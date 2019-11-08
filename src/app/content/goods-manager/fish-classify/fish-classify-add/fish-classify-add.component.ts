import { Component, OnInit } from '@angular/core';
import { FishClassify } from 'src/app/service';

@Component({
  selector: 'app-fish-classify-add',
  templateUrl: './fish-classify-add.component.html',
  styleUrls: [ './fish-classify-add.component.scss' ]
})
export class FishClassifyAddComponent implements OnInit {
  public fishClassify = new FishClassify();
  constructor() {}

  ngOnInit() {}
}
