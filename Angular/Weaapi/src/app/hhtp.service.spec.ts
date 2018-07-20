import { TestBed, inject } from '@angular/core/testing';

import { HhtpService } from './hhtp.service';

describe('HhtpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HhtpService]
    });
  });

  it('should be created', inject([HhtpService], (service: HhtpService) => {
    expect(service).toBeTruthy();
  }));
});
