import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterLesInscriptionsComponent } from './consulter-les-inscriptions.component';

describe('ConsulterLesInscriptionsComponent', () => {
  let component: ConsulterLesInscriptionsComponent;
  let fixture: ComponentFixture<ConsulterLesInscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsulterLesInscriptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterLesInscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
