import { TestBed } from '@angular/core/testing';

import { EntitydetailService } from './entitydetail.service';

describe('EntitydetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntitydetailService = TestBed.get(EntitydetailService);
    expect(service).toBeTruthy();
  });
});
