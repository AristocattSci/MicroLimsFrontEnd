import { TestBed } from '@angular/core/testing';

import { EntityViewerService } from './entity-viewer.service';

describe('EntityViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityViewerService = TestBed.get(EntityViewerService);
    expect(service).toBeTruthy();
  });
});
