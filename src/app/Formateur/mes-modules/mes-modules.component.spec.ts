import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesModulesComponent } from './mes-modules.component';

describe('MesModulesComponent', () => {
  let component: MesModulesComponent;
  let fixture: ComponentFixture<MesModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
