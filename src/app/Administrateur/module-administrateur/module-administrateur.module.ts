import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterUneFormationComponent } from '../gestion-de-formation/ajouter-une-formation/ajouter-une-formation.component';
import { ModifierUneFormationComponent } from '../gestion-de-formation/modifier-une-formation/modifier-une-formation.component';
import { ConsulterUneFormationComponent } from '../gestion-de-formation/consulter-une-formation/consulter-une-formation.component';
import { ConsulterLesFormateursComponent } from '../gestion-de-formateurs/consulter-les-formateurs/consulter-les-formateurs.component';
import { AjouterUnFormateurComponent } from '../gestion-de-formateurs/ajouter-un-formateur/ajouter-un-formateur.component';
import { ModuleAdministrateurRoutingModule } from './module-administrateur-routing.module';

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
import { MatSelectModule } from '@angular/material/select';

import {MatExpansionModule} from '@angular/material/expansion';
import { ConsulterLesInscriptionsComponent } from '../gestion-de-inscription/consulter-les-inscriptions/consulter-les-inscriptions.component';
import { PlanificationDeFormationComponent } from '../gestion-de-inscription/planification-de-formation/planification-de-formation.component';
import { ConsulterLesComptesDesParticipantsComponent } from '../gestion-de-participant/consulter-les-comptes-des-participants/consulter-les-comptes-des-participants.component';
import { ModifierParticipantComponent } from '../gestion-de-participant/modifier-participant/modifier-participant.component';
import { GestionDePayementComponent } from '../gestion-de-participant/gestion-de-payement/gestion-de-payement.component';

import { CalendarModule } from 'primeng/calendar';
import { SkeletonModule } from 'primeng/skeleton';//taille width heigth

import { DatePipe } from '@angular/common';
import { MesformationsComponent } from '../gestion-de-formation/mesformations/mesformations.component';
import { ActiveformationComponent } from '../gestion-de-formation/activeformation/activeformation.component';
@NgModule({
  declarations: [
    AjouterUneFormationComponent,
    ModifierUneFormationComponent,
    ConsulterUneFormationComponent,
    ConsulterLesFormateursComponent,
    AjouterUnFormateurComponent,
    ConsulterLesComptesDesParticipantsComponent,
    DashboardComponent,
    CalendrierComponent,
    ModifierFormateurComponent,
    ModifierParticipantComponent,
    GestionDePayementComponent,
    ConsulterLesInscriptionsComponent,
    PlanificationDeFormationComponent,
    MesformationsComponent,
    ActiveformationComponent,

    
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
    CalendarModule,
    SkeletonModule
  ],providers: [
    provideNativeDateAdapter(),
    DatePipe
  ]
})
export class ModuleAdministrateurModule { }
