import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDErreurDeConnexionComponent } from './page-d-erreur-de-connexion.component';

describe('PageDErreurDeConnexionComponent', () => {
  let component: PageDErreurDeConnexionComponent;
  let fixture: ComponentFixture<PageDErreurDeConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDErreurDeConnexionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDErreurDeConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
