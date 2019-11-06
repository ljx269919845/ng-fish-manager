import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishClassifyAddComponent } from './fish-classify-add.component';

describe('FishClassifyAddComponent', () => {
  let component: FishClassifyAddComponent;
  let fixture: ComponentFixture<FishClassifyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishClassifyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishClassifyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
