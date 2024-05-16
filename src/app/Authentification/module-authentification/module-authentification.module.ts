import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAuthentificationRoutingModule } from './module-authentification-routing.module';
import { AdministrateurComponent } from '../Se connecter/administrateur/administrateur.component';
import { FormateurSComponent } from '../Se connecter/formateur-s/formateur-s.component';
import { ParticipantSComponent } from '../Se connecter/participant-s/participant-s.component';
import { ParticipantIComponent } from '../Inscription/participant-i/participant-i.component';
import { UtilisateurComponent } from '../Se connecter/utilisateur/utilisateur.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdministrateurComponent,
    FormateurSComponent,
    ParticipantSComponent,
    ParticipantIComponent,
    UtilisateurComponent,
  ],
  imports: [
    CommonModule,
    ModuleAuthentificationRoutingModule,
    FormsModule ,
    
    
  ]
})
export class ModuleAuthentificationModule { }
