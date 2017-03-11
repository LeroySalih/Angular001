import { TestBed, inject } from '@angular/core/testing';

import { ServiceQuizService } from './service-quiz.service';

describe('ServiceQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceQuizService]
    });
  });

  it('should ...', inject([ServiceQuizService], (service: ServiceQuizService) => {
    expect(service).toBeTruthy();
  }));
});
