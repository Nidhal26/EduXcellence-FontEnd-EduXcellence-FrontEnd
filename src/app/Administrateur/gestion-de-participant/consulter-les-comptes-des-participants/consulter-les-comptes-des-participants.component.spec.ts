import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterLesComptesDesParticipantsComponent } from './consulter-les-comptes-des-participants.component';

describe('ConsulterLesComptesDesParticipantsComponent', () => {
  let component: ConsulterLesComptesDesParticipantsComponent;
  let fixture: ComponentFixture<ConsulterLesComptesDesParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsulterLesComptesDesParticipantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterLesComptesDesParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
