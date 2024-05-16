import { TestBed } from '@angular/core/testing';

import { ServiceParticipantService } from './service-participant.service';

describe('ServiceParticipantService', () => {
  let service: ServiceParticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
