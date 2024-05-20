import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './Éléments supplémentaires/page-404/page-404.component';
import { PageDErreurDeConnexionComponent } from './Éléments supplémentaires/page-d-erreur-de-connexion/page-d-erreur-de-connexion.component';
import { FooterComponent } from './Accueil/footer/footer.component';
import { MainComponent } from './Accueil/main/main.component';
import { CommonModule } from '@angular/common';
import { ModuleAuthentificationModule } from './Authentification/module-authentification/module-authentification.module';
import { ModuleAdministrateurModule } from './Administrateur/module-administrateur/module-administrateur.module';
import { ModuleFormateurModule } from './Formateur/module-formateur/module-formateur.module';
import { ModuleParticipantModule } from './Participant/module-participant/module-participant.module';
import { PageHelpComponent } from './Éléments supplémentaires/page-help/page-help.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HeaderComponent } from './Accueil/header/header.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DetaillsDesOffresComponent } from './Accueil/les-offres/detaills-des-offres/detaills-des-offres.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AProposComponent } from './Éléments supplémentaires/a-propos/a-propos.component';
import { ContactComponent } from './Éléments supplémentaires/contact/contact.component';
import { ConsulterLesInscriptionsComponent } from './Administrateur/gestion-de-inscription/consulter-les-inscriptions/consulter-les-inscriptions.component';
import { PlanificationDeFormationComponent } from './Administrateur/gestion-de-inscription/planification-de-formation/planification-de-formation.component';



@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    PageDErreurDeConnexionComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PageHelpComponent,
    DetaillsDesOffresComponent,
    AProposComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ModuleAuthentificationModule,
    ModuleAdministrateurModule,
    ModuleFormateurModule,
    ModuleParticipantModule,
    MatProgressBarModule,
    MatInputModule, 
    FormsModule, 
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    HttpClientModule,
     
  
  ],
  providers: [
    provideAnimationsAsync(),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
