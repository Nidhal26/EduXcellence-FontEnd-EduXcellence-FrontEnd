import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDePayementComponent } from './gestion-de-payement.component';

describe('GestionDePayementComponent', () => {
  let component: GestionDePayementComponent;
  let fixture: ComponentFixture<GestionDePayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionDePayementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionDePayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
