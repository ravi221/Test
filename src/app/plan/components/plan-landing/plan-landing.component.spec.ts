import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEligibilityComponent } from './plan-landing.component';

describe('PlanEligibilityComponent', () => {
  let component: PlanEligibilityComponent;
  let fixture: ComponentFixture<PlanEligibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanEligibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
