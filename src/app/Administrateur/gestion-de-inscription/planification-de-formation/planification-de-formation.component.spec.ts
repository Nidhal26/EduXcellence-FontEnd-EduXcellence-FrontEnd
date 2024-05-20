import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationDeFormationComponent } from './planification-de-formation.component';

describe('PlanificationDeFormationComponent', () => {
  let component: PlanificationDeFormationComponent;
  let fixture: ComponentFixture<PlanificationDeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanificationDeFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanificationDeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
