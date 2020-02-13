import { TestBed } from '@angular/core/testing';

import { MamberService } from './mamber.service';

describe('MamberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MamberService = TestBed.get(MamberService);
    expect(service).toBeTruthy();
  });
});
