import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienEvaluationComponent } from './lien-evaluation.component';

describe('LienEvaluationComponent', () => {
  let component: LienEvaluationComponent;
  let fixture: ComponentFixture<LienEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LienEvaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LienEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
