import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishPlaceAddComponent } from './fish-place-add.component';

describe('FishPlaceAddComponent', () => {
  let component: FishPlaceAddComponent;
  let fixture: ComponentFixture<FishPlaceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishPlaceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishPlaceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
