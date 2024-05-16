import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from '../Se connecter/administrateur/administrateur.component';
import { FormateurSComponent } from '../Se connecter/formateur-s/formateur-s.component';
import { ParticipantSComponent } from '../Se connecter/participant-s/participant-s.component';
import { ParticipantIComponent } from '../Inscription/participant-i/participant-i.component';
import { UtilisateurComponent } from '../Se connecter/utilisateur/utilisateur.component';

const routes: Routes = [
  {
    path: "Connexion", children: [
      { path: "Administrateur", component: AdministrateurComponent },
      { path: "Formateur", component: FormateurSComponent },
      { path: "Participant", component: ParticipantSComponent }]
  },
  {
    path: "Inscription", children: [
      { path: "Participant", component: ParticipantIComponent }
    ]
  },
  { path: "EduXcellence", component: UtilisateurComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAuthentificationRoutingModule { }
