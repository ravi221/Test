import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanVisionComponent } from './insurance-quote.component';

describe('PlanVisionComponent', () => {
  let component: PlanVisionComponent;
  let fixture: ComponentFixture<PlanVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
