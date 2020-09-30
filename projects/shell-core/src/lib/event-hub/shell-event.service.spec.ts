import { TestBed } from '@angular/core/testing';

import { ShellEventService } from './shell-event.service';

describe('ShellEventService', () => {
  let service: ShellEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShellEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
