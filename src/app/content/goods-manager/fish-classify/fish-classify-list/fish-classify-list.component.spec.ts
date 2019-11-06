import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishClassifyListComponent } from './fish-classify-list.component';

describe('FishClassifyListComponent', () => {
  let component: FishClassifyListComponent;
  let fixture: ComponentFixture<FishClassifyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishClassifyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishClassifyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
