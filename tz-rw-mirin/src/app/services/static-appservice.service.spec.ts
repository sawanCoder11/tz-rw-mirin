import { TestBed } from '@angular/core/testing';

import { StaticAppserviceService } from './static-appservice.service';

describe('StaticAppserviceService', () => {
  let service: StaticAppserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticAppserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
