import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCostComponent } from './FlightCost.component';

describe('StudentComponent', () => {
  let component: FlightCostComponent;
  let fixture: ComponentFixture<FlightCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
