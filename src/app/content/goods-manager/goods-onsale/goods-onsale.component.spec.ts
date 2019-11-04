import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsOnsaleComponent } from './goods-onsale.component';

describe('GoodsOnsaleComponent', () => {
  let component: GoodsOnsaleComponent;
  let fixture: ComponentFixture<GoodsOnsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsOnsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsOnsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
