import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterUneFormationComponent } from './consulter-une-formation.component';

describe('ConsulterUneFormationComponent', () => {
  let component: ConsulterUneFormationComponent;
  let fixture: ComponentFixture<ConsulterUneFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsulterUneFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterUneFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
