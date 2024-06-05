import { TestBed } from '@angular/core/testing';

import { ErviceelementsupplementaireService } from './erviceelementsupplementaire.service';

describe('ErviceelementsupplementaireService', () => {
  let service: ErviceelementsupplementaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErviceelementsupplementaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
