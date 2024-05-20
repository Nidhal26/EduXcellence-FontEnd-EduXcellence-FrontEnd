import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { strongPasswordValidator } from './strongPasswordValidator';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';
import { MatDialogRef } from '@angular/material/dialog';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-modifier-formateur',
  templateUrl: './modifier-formateur.component.html',
  styleUrl: './modifier-formateur.component.scss'
})
export class ModifierFormateurComponent {


  constructor(private _service:ServiceAdministrateurService,public dialogRef: MatDialogRef<ModifierFormateurComponent>){
    this._service.ListerUnSeulFormateur(this._service.getIDF(),localStorage.getItem("token")).subscribe((response:any)=>{
      if (response.Message == "Formateur not found"){
        this.messageerror = response.Message
        setTimeout(() => {
          this.messageerror = ""
          this.dialogRef.close();
        }, 2500);
      }else if(response.Message == "Accès refusé"){
        this.messageerror = response.Message
        setTimeout(() => {
          this.messageerror = ""
          this.dialogRef.close();
        }, 2500);
      }else{
        this.numerotelephone=response.Formateur.numTelephone
        this.motdepasse=response.Formateur.motDePasse
        this.email=response.Formateur.email
        this.nomprenom=response.Formateur.nomPrenom
      }
    })
  }

  hide = true;

  emailFormControl = new FormControl();
  motdepasseFormControl = new FormControl();
  telephoneFormControl = new FormControl();
  photoFormControl = new FormControl();
  cvFormControl = new FormControl();
  nameFormControl = new FormControl();
  prenomFormControl = new FormControl();

  matcher = new MyErrorStateMatcher();

  numerotelephone:any=""
  motdepasse:any=""
  email:any=""
  nomprenom:any=""

  messagealert: any;
  messageerror: any;
  messagesuccess:any;

  ModifierCompteDeFormateur(){
    if (this.nomprenom ==""){
      this.messagealert = "Nom et Prenom Obligatoire";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
      return;
    }
    if (this.email =="" ){
      this.messagealert = "Email Obligatoire";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
      return;
    }
    if (!this.isValidEmail(this.email)){
      this.messagealert = "Enter Valide Email";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
      return;
    }
    if (this.motdepasse ==""){
      this.messagealert = "Mot De Passe Obligatoire";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
      return;
    }
    if (!this.isStrongPassword(this.motdepasse)){
      this.messagealert = "Le mot de passe doit être fort (au moins 8 caractères, avec au moins une lettre et un chiffre) ";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
      return;
    }
    if (this.numerotelephone==""){
      this.messagealert = "Numero De Telephone Obligatoire";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
      return;
    }
    if (!this.validatePhoneNumber(this.numerotelephone)){
      this.messagealert = "Le numéro de téléphone doit contenir uniquement des chiffres et être exactement de 8 chiffres";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
      return;
    }
      
    let formdata = new FormData();
    formdata.append("email",this.email);
    formdata.append("motDePasse",this.motdepasse);
    formdata.append("nomPrenom",this.nomprenom);
    formdata.append("numTelephone",this.numerotelephone);
    this._service.ModifierCompteDeFormateur(formdata,localStorage.getItem('token'),this._service.getIDF()).subscribe((response:any)=>{
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
        }, 2500);
      }
    })
  }

  isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  isStrongPassword(password: string): boolean {
    return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
  }

  validatePhoneNumber(phoneNumber: string): boolean {
    const numericRegex = /^[0-9]{8}$/;
    return numericRegex.test(phoneNumber);
  }
closeAlert() {
throw new Error('Method not implemented.');
}

}

