import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetailsComponent } from './plan-entry.component';

describe('PlanDetailsComponent', () => {
  let component: PlanDetailsComponent;
  let fixture: ComponentFixture<PlanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
