import { TestBed } from '@angular/core/testing';

import { AuhtInterceptorService } from './auht-interceptor.service';

describe('AuhtInterceptorService', () => {
  let service: AuhtInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuhtInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
