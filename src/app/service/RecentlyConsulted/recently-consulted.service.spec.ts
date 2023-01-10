import { TestBed } from '@angular/core/testing';

import { RecentlyConsultedService } from './recently-consulted.service';

describe('RecentlyConsultedService', () => {
  let service: RecentlyConsultedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentlyConsultedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
