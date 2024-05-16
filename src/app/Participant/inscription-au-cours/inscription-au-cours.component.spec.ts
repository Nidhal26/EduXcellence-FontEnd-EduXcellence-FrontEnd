import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionAuCoursComponent } from './inscription-au-cours.component';

describe('InscriptionAuCoursComponent', () => {
  let component: InscriptionAuCoursComponent;
  let fixture: ComponentFixture<InscriptionAuCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptionAuCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionAuCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
