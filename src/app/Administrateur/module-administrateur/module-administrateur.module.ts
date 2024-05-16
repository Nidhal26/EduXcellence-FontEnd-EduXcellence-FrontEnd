import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { AjouterUneFormationComponent } from '../gestion-de-formation/ajouter-une-formation/ajouter-une-formation.component';
import { ModifierUneFormationComponent } from '../gestion-de-formation/modifier-une-formation/modifier-une-formation.component';
import { ConsulterUneFormationComponent } from '../gestion-de-formation/consulter-une-formation/consulter-une-formation.component';
import { ConsulterLesFormateursComponent } from '../gestion-de-formateurs/consulter-les-formateurs/consulter-les-formateurs.component';
import { AjouterUnFormateurComponent } from '../gestion-de-formateurs/ajouter-un-formateur/ajouter-un-formateur.component';
import { ProfileComponent } from '../profile/profile.component';
import { ModuleAdministrateurRoutingModule } from './module-administrateur-routing.module';
import { ConsulterLesDemandesDinscriptionComponent } from '../gestion-de-inscription/consulter-les-demandes-dinscription/consulter-les-demandes-dinscription.component';
import { ConsulterLesComptesDesParticipantsComponent } from '../gestion-de-inscription/consulter-les-comptes-des-participants/consulter-les-comptes-des-participants.component';

/*-----------------------------------------------------------------------Dashboard---------------------------------------------------------------------------------------------*/

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { CalendrierComponent } from '../calendrier/calendrier/calendrier.component';
import {AnimateModule} from 'primeng/animate';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';;
/*-----------------------------------------------------------------------Dashboard---------------------------------------------------------------------------------------------*/
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatDialogModule} from '@angular/material/dialog';
import { ModifierFormateurComponent } from '../gestion-de-formateurs/modifier-formateur/modifier-formateur.component';


import { FileUploadModule } from 'primeng/fileupload';
import { ModifierParticipantComponent } from '../gestion-de-inscription/modifier-participant/modifier-participant.component';
import { ModifierProfileComponent } from '../profile/modifier-profile/modifier-profile.component';
import { GestionDePayementComponent } from '../gestion-de-inscription/gestion-de-payement/gestion-de-payement.component';
import { MatSelectModule } from '@angular/material/select';
import { EvaluationComponent } from '../gestion-de-formation/evaluation/evaluation.component';

import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    ProfileComponent,
    ContactComponent,
    AjouterUneFormationComponent,
    ModifierUneFormationComponent,
    ConsulterUneFormationComponent,
    ConsulterLesFormateursComponent,
    AjouterUnFormateurComponent,
    ConsulterLesDemandesDinscriptionComponent,
    ConsulterLesComptesDesParticipantsComponent,
    DashboardComponent,
    CalendrierComponent,
    ModifierFormateurComponent,
    ModifierParticipantComponent,
    ModifierProfileComponent,
    GestionDePayementComponent,
    EvaluationComponent,
  ],
  imports: [
    CommonModule,
    ModuleAdministrateurRoutingModule,
    FormsModule,
    HighchartsChartModule,
    AnimateModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule, 
    MatDialogModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatSelectModule,
    MatExpansionModule,
  ],providers: [
    provideNativeDateAdapter()
  ]
})
export class ModuleAdministrateurModule { }
