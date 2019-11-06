import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishPlaceListComponent } from './fish-place-list.component';

describe('FishPlaceListComponent', () => {
  let component: FishPlaceListComponent;
  let fixture: ComponentFixture<FishPlaceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishPlaceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishPlaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
