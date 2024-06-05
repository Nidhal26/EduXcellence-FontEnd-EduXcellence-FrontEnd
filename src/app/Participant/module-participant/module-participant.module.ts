import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleParticipantRoutingModule } from './module-participant-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MesOffresComponent } from '../mes-offres/mes-offres.component';
import { InscriptionAuCoursComponent } from '../inscription-au-cours/inscription-au-cours.component';
import { RouterModule } from '@angular/router';
import { DetaillsDesOffresComponent } from '../mes-offres/detaills-des-offres/detaills-des-offres.component';



@NgModule({
  declarations: [
    MesOffresComponent,
    InscriptionAuCoursComponent,
    DetaillsDesOffresComponent
  ],
  imports: [
    CommonModule,
    ModuleParticipantRoutingModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    FileUploadModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    RouterModule
    
    
  ]
  

})
export class ModuleParticipantModule { }
