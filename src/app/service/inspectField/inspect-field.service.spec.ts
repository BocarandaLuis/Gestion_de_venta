import { TestBed } from '@angular/core/testing';

import { InspectFieldService } from './inspect-field.service';

describe('InspectFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InspectFieldService = TestBed.get(InspectFieldService);
    expect(service).toBeTruthy();
  });
});
