import { TestBed } from '@angular/core/testing';

import { LogisticsDetailsService } from './logistics-details.service';

describe('LogisticsDetailsService', () => {
  let service: LogisticsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogisticsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
