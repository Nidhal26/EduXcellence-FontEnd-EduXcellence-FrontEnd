import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterLesDemandesDinscriptionComponent } from './consulter-les-demandes-dinscription.component';

describe('ConsulterLesDemandesDinscriptionComponent', () => {
  let component: ConsulterLesDemandesDinscriptionComponent;
  let fixture: ComponentFixture<ConsulterLesDemandesDinscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsulterLesDemandesDinscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterLesDemandesDinscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
