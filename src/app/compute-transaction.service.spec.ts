import { TestBed, inject } from '@angular/core/testing';

import { ComputeTransactionService } from './compute-transaction.service';

describe('ComputeTransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComputeTransactionService]
    });
  });

  it('should be created', inject([ComputeTransactionService], (service: ComputeTransactionService) => {
    expect(service).toBeTruthy();
  }));
});
