import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionsComponent } from './dynamic-sections.component';

describe('DynamicSectionsComponent', () => {
  let component: DynamicSectionsComponent;
  let fixture: ComponentFixture<DynamicSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
