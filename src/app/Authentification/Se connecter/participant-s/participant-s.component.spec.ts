import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantSComponent } from './participant-s.component';

describe('ParticipantSComponent', () => {
  let component: ParticipantSComponent;
  let fixture: ComponentFixture<ParticipantSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipantSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipantSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
