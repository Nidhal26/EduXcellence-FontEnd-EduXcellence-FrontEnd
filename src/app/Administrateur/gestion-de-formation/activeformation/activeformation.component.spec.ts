import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveformationComponent } from './activeformation.component';

describe('ActiveformationComponent', () => {
  let component: ActiveformationComponent;
  let fixture: ComponentFixture<ActiveformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
