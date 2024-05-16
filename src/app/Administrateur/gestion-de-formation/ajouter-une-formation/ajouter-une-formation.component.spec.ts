import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUneFormationComponent } from './ajouter-une-formation.component';

describe('AjouterUneFormationComponent', () => {
  let component: AjouterUneFormationComponent;
  let fixture: ComponentFixture<AjouterUneFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterUneFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterUneFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
