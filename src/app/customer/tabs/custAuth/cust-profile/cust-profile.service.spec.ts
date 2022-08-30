import { TestBed } from '@angular/core/testing';

import { CustProfileService } from './cust-profile.service';

describe('CustProfileService', () => {
  let service: CustProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
