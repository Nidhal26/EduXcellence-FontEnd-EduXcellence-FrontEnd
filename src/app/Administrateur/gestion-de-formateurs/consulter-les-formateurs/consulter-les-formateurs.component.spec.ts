import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterLesFormateursComponent } from './consulter-les-formateurs.component';

describe('ConsulterLesFormateursComponent', () => {
  let component: ConsulterLesFormateursComponent;
  let fixture: ComponentFixture<ConsulterLesFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsulterLesFormateursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterLesFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
