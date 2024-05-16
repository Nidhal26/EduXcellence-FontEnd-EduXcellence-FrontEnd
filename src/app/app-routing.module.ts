import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Accueil/main/main.component';
import { Page404Component } from './Éléments supplémentaires/page-404/page-404.component';
import { PageDErreurDeConnexionComponent } from './Éléments supplémentaires/page-d-erreur-de-connexion/page-d-erreur-de-connexion.component';
import { DetaillsDesOffresComponent } from './Accueil/les-offres/detaills-des-offres/detaills-des-offres.component';
import { AProposComponent } from './Éléments supplémentaires/a-propos/a-propos.component';
import { ContactComponent } from './Administrateur/contact/contact.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "Authentification", loadChildren: () => import("../app/Authentification/module-authentification/module-authentification.module").then((e) => e.ModuleAuthentificationModule) },
  { path: "Administrateur", loadChildren: () => import("../app/Administrateur/module-administrateur/module-administrateur.module").then((e) => e.ModuleAdministrateurModule) },
  { path: "Formateur", loadChildren: () => import("../app/Formateur/module-formateur/module-formateur.module").then((e) => e.ModuleFormateurModule) },
  { path : "Participant", loadChildren : () => import("../app/Participant/module-participant/module-participant.module").then((e)=> e.ModuleParticipantModule)},
  { path: "**", component: Page404Component },
  { path: "404", component: PageDErreurDeConnexionComponent },
  { path: "DetailsOffres", component: DetaillsDesOffresComponent },
  {path:"Propos", component:AProposComponent},
  {path:"Contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
