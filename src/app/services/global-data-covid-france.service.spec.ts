import { TestBed } from '@angular/core/testing';

import { GlobalDataCovidFranceService } from './global-data-covid-france.service';

describe('GlobalDataCovidFranceService', () => {
  let service: GlobalDataCovidFranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalDataCovidFranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
