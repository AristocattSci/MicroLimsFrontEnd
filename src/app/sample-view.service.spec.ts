import { TestBed } from '@angular/core/testing';

import { SampleViewService } from './sample-view.service';

describe('SampleViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleViewService = TestBed.get(SampleViewService);
    expect(service).toBeTruthy();
  });
});
