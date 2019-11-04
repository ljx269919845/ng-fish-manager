import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsForsaleComponent } from './goods-forsale.component';

describe('GoodsForsaleComponent', () => {
  let component: GoodsForsaleComponent;
  let fixture: ComponentFixture<GoodsForsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsForsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsForsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
