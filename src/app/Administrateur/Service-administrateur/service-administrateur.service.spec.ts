import { TestBed } from '@angular/core/testing';

import { ServiceAdministrateurService } from './service-administrateur.service';

describe('ServiceAdministrateurService', () => {
  let service: ServiceAdministrateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdministrateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
