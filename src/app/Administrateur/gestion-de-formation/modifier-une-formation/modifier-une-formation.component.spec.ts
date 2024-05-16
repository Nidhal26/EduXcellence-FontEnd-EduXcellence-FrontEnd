import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUneFormationComponent } from './modifier-une-formation.component';

describe('ModifierUneFormationComponent', () => {
  let component: ModifierUneFormationComponent;
  let fixture: ComponentFixture<ModifierUneFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierUneFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierUneFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
