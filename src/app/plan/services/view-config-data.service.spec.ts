import { TestBed, inject } from '@angular/core/testing';

import { ViewConfigDataService } from './view-config-data.service';

describe('ViewConfigDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewConfigDataService]
    });
  });

  it('should be created', inject([ViewConfigDataService], (service: ViewConfigDataService) => {
    expect(service).toBeTruthy();
  }));
});
