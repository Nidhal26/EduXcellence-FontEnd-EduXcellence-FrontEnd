import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementSupplementaireRoutingModule } from './element-supplementaire-routing.module';
import { PageDErreurDeConnexionComponent } from '../page-d-erreur-de-connexion/page-d-erreur-de-connexion.component';
import { ContactComponent } from '../contact/contact.component';
import { ProposComponent } from '../propos/propos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PageDErreurDeConnexionComponent,
    ContactComponent,
    ProposComponent
  ],
  imports: [
    CommonModule,
    ElementSupplementaireRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ElementSupplementaireModule { }
