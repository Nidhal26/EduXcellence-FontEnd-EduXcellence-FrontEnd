import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Accueil/main/main.component';
import { Page404Component } from './elementSupplementaire/page-404/page-404.component';
import { DetaillsDesOffresComponent } from './Accueil/les-offres/detaills-des-offres/detaills-des-offres.component';

const routes: Routes = [
  { path: "Authentification", loadChildren: () => import("../app/Authentification/module-authentification/module-authentification.module").then((e) => e.ModuleAuthentificationModule) },
  { path: "Administrateur", loadChildren: () => import("../app/Administrateur/module-administrateur/module-administrateur.module").then((e) => e.ModuleAdministrateurModule) },
  { path: "Formateur", loadChildren: () => import("../app/Formateur/module-formateur/module-formateur.module").then((e) => e.ModuleFormateurModule) },
  { path : "Participant", loadChildren : () => import("../app/Participant/module-participant/module-participant.module").then((e)=> e.ModuleParticipantModule)},
  { path : "EduXcellence", loadChildren : () => import("../app/elementSupplementaire/element-supplementaire/element-supplementaire.module").then((e)=> e.ElementSupplementaireModule)},
  { path: "", component: MainComponent },
  { path: "**", component: Page404Component },
  { path: "DetailsOffres", component: DetaillsDesOffresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
