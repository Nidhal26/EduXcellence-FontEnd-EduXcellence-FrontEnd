import { TestBed } from '@angular/core/testing';

import { ServiceFormateurService } from './service-formateur.service';

describe('ServiceFormateurService', () => {
  let service: ServiceFormateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFormateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
