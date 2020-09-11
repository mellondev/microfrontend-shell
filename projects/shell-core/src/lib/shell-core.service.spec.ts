import { TestBed } from '@angular/core/testing';

import { ShellCoreService } from './shell-core.service';

describe('ShellCoreService', () => {
  let service: ShellCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShellCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
