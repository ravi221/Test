import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavSorterComponent } from './main-nav-sorter.component';

describe('MainNavSorterComponent', () => {
  let component: MainNavSorterComponent;
  let fixture: ComponentFixture<MainNavSorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavSorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
