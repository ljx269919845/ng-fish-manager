import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishAddComponent } from './fish-add.component';

describe('FishAddComponent', () => {
  let component: FishAddComponent;
  let fixture: ComponentFixture<FishAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
