import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavTemplateComponent } from './main-nav-template.component';

describe('MainNavTemplateComponent', () => {
  let component: MainNavTemplateComponent;
  let fixture: ComponentFixture<MainNavTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
