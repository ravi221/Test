import { TestBed, inject } from '@angular/core/testing';

import { PlanResolverService } from './plan-resolver.service';

describe('PlanResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanResolverService]
    });
  });

  it('should be created', inject([PlanResolverService], (service: PlanResolverService) => {
    expect(service).toBeTruthy();
  }));
});
