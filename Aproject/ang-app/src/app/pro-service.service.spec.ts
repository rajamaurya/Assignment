import { TestBed, inject } from '@angular/core/testing';

import { ProServiceService } from './pro-service.service';

describe('ProServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProServiceService]
    });
  });

  it('should be created', inject([ProServiceService], (service: ProServiceService) => {
    expect(service).toBeTruthy();
  }));
});
