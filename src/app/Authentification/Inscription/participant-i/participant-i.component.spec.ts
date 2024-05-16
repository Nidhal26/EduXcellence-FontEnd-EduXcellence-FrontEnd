import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantIComponent } from './participant-i.component';

describe('ParticipantIComponent', () => {
  let component: ParticipantIComponent;
  let fixture: ComponentFixture<ParticipantIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipantIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipantIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
