import { TestBed, inject } from '@angular/core/testing';

import { LoaderServiceService } from './notify.service';

describe('LoaderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderServiceService]
    });
  });

  it('should be created', inject([LoaderServiceService], (service: LoaderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
