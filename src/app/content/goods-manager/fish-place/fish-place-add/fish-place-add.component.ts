import { Component, OnInit } from '@angular/core';
import { FishPlace, FishPlaceExtraDesc } from 'src/app/service';
import { clickOnce } from 'src/app/core/cache';

@Component({
  selector: 'app-fish-place-add',
  templateUrl: './fish-place-add.component.html',
  styleUrls: ['./fish-place-add.component.scss']
})
export class FishPlaceAddComponent implements OnInit {
  public fishPlace = new FishPlace();
  constructor() {}

  ngOnInit() {}

  @clickOnce()
  handleAddFishPlaceDescClick() {
    const fishPlaceDesc = new FishPlaceExtraDesc();
    if (!this.fishPlace.extraDesc) {
      this.fishPlace.extraDesc = [fishPlaceDesc];
    } else {
      this.fishPlace.extraDesc.push(fishPlaceDesc);
    }
  }
}
