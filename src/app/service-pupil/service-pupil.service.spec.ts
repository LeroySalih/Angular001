import { TestBed, inject } from '@angular/core/testing';

import { ServicePupilService } from './service-pupil.service';

describe('ServicePupilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicePupilService]
    });
  });

  it('should ...', inject([ServicePupilService], (service: ServicePupilService) => {
    expect(service).toBeTruthy();
  }));
});
