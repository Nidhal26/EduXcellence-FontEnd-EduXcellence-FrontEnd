import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillsDesOffresComponent } from './detaills-des-offres.component';

describe('DetaillsDesOffresComponent', () => {
  let component: DetaillsDesOffresComponent;
  let fixture: ComponentFixture<DetaillsDesOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetaillsDesOffresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetaillsDesOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
