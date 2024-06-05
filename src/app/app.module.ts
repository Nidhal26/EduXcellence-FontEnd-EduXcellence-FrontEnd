import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './elementSupplementaire/page-404/page-404.component';
import { FooterComponent } from './Accueil/footer/footer.component';
import { MainComponent } from './Accueil/main/main.component';
import { CommonModule } from '@angular/common';
import { ModuleAuthentificationModule } from './Authentification/module-authentification/module-authentification.module';
import { ModuleAdministrateurModule } from './Administrateur/module-administrateur/module-administrateur.module';
import { ModuleFormateurModule } from './Formateur/module-formateur/module-formateur.module';
import { ModuleParticipantModule } from './Participant/module-participant/module-participant.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HeaderComponent } from './Accueil/header/header.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { ElementSupplementaireModule } from './elementSupplementaire/element-supplementaire/element-supplementaire.module';
import { DetaillsDesOffresComponent } from './Accueil/les-offres/detaills-des-offres/detaills-des-offres.component';
import { DeconnexionComponent } from './Accueil/deconnexion/deconnexion.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    DetaillsDesOffresComponent,
    DeconnexionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ModuleAuthentificationModule,
    ModuleAdministrateurModule,
    ModuleFormateurModule,
    ModuleParticipantModule,
    ElementSupplementaireModule,
    MatProgressBarModule,
    MatInputModule, 
    FormsModule, 
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    HttpClientModule,
    MenubarModule
     
  
  ],
  providers: [
    provideAnimationsAsync(),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
