import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFormateurRoutingModule } from './module-formateur-routing.module';
import { MesModulesComponent } from '../mes-modules/mes-modules.component';
import { AjouterModuleComponent } from '../ajouter-module/ajouter-module.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

import { FileUploadModule } from 'primeng/fileupload';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ProfileComponent } from '../profile/profile.component';
import { ModifierProfileComponent } from '../profile/modifier-profile/modifier-profile.component';

@NgModule({
  declarations: [
    MesModulesComponent,
    AjouterModuleComponent,
    ProfileComponent,
    ModifierProfileComponent
  ],
  imports: [
    CommonModule,
    ModuleFormateurRoutingModule,
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
    ReactiveFormsModule
  ]
})
export class ModuleFormateurModule { }
