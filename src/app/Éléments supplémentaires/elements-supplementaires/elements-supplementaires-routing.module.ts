import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDErreurDeConnexionComponent } from '../page-d-erreur-de-connexion/page-d-erreur-de-connexion.component';
import { DetaillsDesOffresComponent } from '../../Accueil/les-offres/detaills-des-offres/detaills-des-offres.component';
import { ContactComponent } from '../contact/contact.component';
import { ProposComponent } from '../propos/propos.component';

const routes: Routes = [

  { path: "404", component: PageDErreurDeConnexionComponent },
  { path: "DetailsOffres", component: DetaillsDesOffresComponent },
  {path:"Contact", component:ContactComponent},
  {path:"propos", component:ProposComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsSupplementairesRoutingModule { }
