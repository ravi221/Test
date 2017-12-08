import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersNavMenuComponent } from './customers-nav-menu.component';

describe('CustomersNavMenuComponent', () => {
  let component: CustomersNavMenuComponent;
  let fixture: ComponentFixture<CustomersNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
