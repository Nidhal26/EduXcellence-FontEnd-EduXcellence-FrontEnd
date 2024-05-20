import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterUnFormateurComponent } from '../gestion-de-formateurs/ajouter-un-formateur/ajouter-un-formateur.component';
import { ConsulterLesFormateursComponent } from '../gestion-de-formateurs/consulter-les-formateurs/consulter-les-formateurs.component';
import { ConsulterUneFormationComponent } from '../gestion-de-formation/consulter-une-formation/consulter-une-formation.component';
import { AjouterUneFormationComponent } from '../gestion-de-formation/ajouter-une-formation/ajouter-une-formation.component';
import { ModifierUneFormationComponent } from '../gestion-de-formation/modifier-une-formation/modifier-une-formation.component';
import { ContactComponent } from '../contact/contact.component';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CalendrierComponent } from '../calendrier/calendrier/calendrier.component';
import { ConsulterLesInscriptionsComponent } from '../gestion-de-inscription/consulter-les-inscriptions/consulter-les-inscriptions.component';
import { ConsulterLesComptesDesParticipantsComponent } from '../gestion-de-participant/consulter-les-comptes-des-participants/consulter-les-comptes-des-participants.component';
import { PlanificationDeFormationComponent } from '../gestion-de-inscription/planification-de-formation/planification-de-formation.component';

const routes: Routes = [
  {
    path:"GestionDesFormateurs", children: [
      { path:"NouvelleFormateur", component:AjouterUnFormateurComponent},
      { path:"Accueil", component:ConsulterLesFormateursComponent}]},
  {
    path:"GestionDeFormation", children: [
    { path:"Accueil", component:ConsulterUneFormationComponent},
    { path:"NouvelleFormation", component:AjouterUneFormationComponent},
    { path:"Modification", component:ModifierUneFormationComponent}]
  },
  {
    path:"GestionDeParticipant", children: [
    { path:"Accueil", component:ConsulterLesComptesDesParticipantsComponent}]
  },
  {
    path:"GestionDinscription", children: [
    { path:"Planification", component:PlanificationDeFormationComponent},
    { path:"Accueil", component:ConsulterLesInscriptionsComponent}]
  },

  { path:"inboxEmail", component:ContactComponent},
  { path:"Profile", component:ProfileComponent},
  { path:"Dashboard", component:DashboardComponent},
  { path:"Calendrier", component:CalendrierComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAdministrateurRoutingModule {}
