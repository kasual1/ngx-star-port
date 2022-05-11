import { TestBed } from '@angular/core/testing';

import { NgxStarPortService } from './ngx-star-port.service';

describe('NgxStarPortService', () => {
  let service: NgxStarPortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStarPortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
