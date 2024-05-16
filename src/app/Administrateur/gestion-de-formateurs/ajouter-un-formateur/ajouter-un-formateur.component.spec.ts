import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnFormateurComponent } from './ajouter-un-formateur.component';

describe('AjouterUnFormateurComponent', () => {
  let component: AjouterUnFormateurComponent;
  let fixture: ComponentFixture<AjouterUnFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterUnFormateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterUnFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
