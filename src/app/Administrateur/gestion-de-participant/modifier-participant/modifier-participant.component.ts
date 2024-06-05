import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../gestion-de-formateurs/modifier-formateur/modifier-formateur.component';
import { strongPasswordValidator } from '../../gestion-de-formateurs/modifier-formateur/strongPasswordValidator';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modifier-participant',
  templateUrl: './modifier-participant.component.html',
  styleUrl: './modifier-participant.component.scss'
})
export class ModifierParticipantComponent {
  value = 'Clear me';

  hide = true;

  emailFormControl = new FormControl();
  motdepasseFormControl = new FormControl();
  telephoneFormControl = new FormControl();
  cvFormControl = new FormControl();

  matcher = new MyErrorStateMatcher();

  constructor(private _service:ServiceAdministrateurService,public dialogRef: MatDialogRef<ModifierParticipantComponent>){
    this._service.ListerUnSeulParticipant(this._service.getIDF(),localStorage.getItem("token")).subscribe((response:any)=>{
      if (response.Message =="Participant not found"){
        this.messageerror = response.Message
        setTimeout(() => {
          this.messageerror = ""
          this.dialogRef.close();
        }, 3500);
      }else if(response.Message == "Accès refusé"){
        this.messageerror = response.Message
        setTimeout(() => {
          this.messageerror = ""
          this.dialogRef.close();
        }, 3500);
      }else{
        this.nomprenom=response.Participant.nomPrenom
        this.email=response.Participant.email
        this.motdepasse=response.Participant.motDePasse
        this.niveaudetude=response.Participant.niveauDEtude
      }
    })
  }

  
  messagealert: any="";
  messageerror: any="";
  messagesuccess:any="";

email: any;
motdepasse: any;
niveaudetude: any;
nomprenom:any

  ModifierCompteDeParticipant(){
    if (this.nomprenom ==""){
      this.messagealert = "Nom et Prenom Obligatoire";
      setTimeout(() => {
        this.messagealert = "";
      }, 3500);
      return;
    }
    if (this.email =="" ){
      this.messagealert = "Email Obligatoire";
      setTimeout(() => {
        this.messagealert = "";
      }, 3500);
      return;
    }
    if (!this.isValidEmail(this.email)){
      this.messagealert = "Enter Valide Email";
      setTimeout(() => {
        this.messagealert = "";
      }, 3500);
      return;
    }
    if (this.motdepasse ==""){
      this.messagealert = "Mot De Passe Obligatoire";
      setTimeout(() => {
        this.messagealert = "";
      }, 3500);
      return;
    }
    if (!this.isStrongPassword(this.motdepasse)){
      this.messagealert = "Le mot de passe doit être fort (au moins 8 caractères, avec au moins une lettre et un chiffre) ";
      setTimeout(() => {
        this.messagealert = "";
      }, 3500);
      return;
    }
      
    let formdata = new FormData();
    formdata.append("email",this.email);
    formdata.append("nomPrenom",this.nomprenom);
    formdata.append("motDePasse",this.motdepasse);
    formdata.append("niveauDEtude",this.niveaudetude);
    this._service.ModifierCompteDeParticipant(formdata,localStorage.getItem('token'),this._service.getIDF()).subscribe((response:any)=>{
      if (response.Message =="Compte mis à jour avec succès"){
        this.dialogRef.close();
        this.messagesuccess= response.Message;
        setTimeout(()=>{
          this.messagesuccess="";
          window.location.reload();
        },1500)
      }else{
        this.messageerror=response.Message;
        setTimeout(() => {
          this.messageerror="";
        }, 3500);
      }
    })
  }

  isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  isStrongPassword(password: string): boolean {
    return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
  }

}
