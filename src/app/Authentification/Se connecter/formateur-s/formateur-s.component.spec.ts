import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurSComponent } from './formateur-s.component';

describe('FormateurSComponent', () => {
  let component: FormateurSComponent;
  let fixture: ComponentFixture<FormateurSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormateurSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormateurSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
