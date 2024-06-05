import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../gestion-de-formateurs/modifier-formateur/modifier-formateur.component';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ajouter-une-formation',
  templateUrl: './ajouter-une-formation.component.html',
  styleUrl: './ajouter-une-formation.component.css'
})
export class AjouterUneFormationComponent {

  hide = true;

  
  inputFormControl1 = new FormControl();
  inputFormControl2 = new FormControl();
  inputFormControl3 = new FormControl();
  inputFormControl4 = new FormControl();

matcher = new MyErrorStateMatcher();

themedeformation: any=""
Description: any=""
Prix: any=""
datedebut:any=""
datefin:any=""

constructor(private _service:ServiceAdministrateurService,public dialogRef: MatDialogRef<AjouterUneFormationComponent>){}

messagealert: any="";
messageerror: any="";
messagesuccess:any="";

AjouterUneNouvelleFormation(){
  if (!this.themedeformation){
    this.messagealert = "Theme De Formation Obligatoire";
    setTimeout(() => {
      this.messagealert = "";
    }, 3500);
    return;
  }
  if (!this.Description){
    this.messagealert = "Description Obligatoire";
    setTimeout(() => {
      this.messagealert = "";
    }, 3500);
    return;
  }
  if (!this.Prix){
    this.messagealert = "Prix Obligatoire";
    setTimeout(() => {
      this.messagealert = "";
    }, 3500);
    return;
  }
  if (!this.validatePrix(this.Prix)){
    this.messagealert = "Prix doit contient des chiffre";
    setTimeout(() => {
      this.messagealert = "";
    }, 3500);
    return;
  }
  if (!this.datedebut){
    this.messagealert = "Date Debut Obligatoire";
    setTimeout(() => {
      this.messagealert = "";
    }, 3500);
    return;
  }
  if (!this.datefin){
    this.messagealert = "Date Fin Obligatoire";
    setTimeout(() => {
      this.messagealert = "";
    }, 3500);
    return;
  }  
  let formdata = new FormData();
  formdata.append("themeFormation",this.themedeformation);
  formdata.append("desciption",this.Description);
  formdata.append("prix",this.Prix);
  formdata.append("datedebut",this.datedebut);
  formdata.append("datefin",this.datefin);
  this._service.CreationUneNouvelleFormation(formdata,localStorage.getItem("token")).subscribe((response:any)=>{
    if (response.Message=="La formation a été ajoutée avec succès"){
      this.messagesuccess= response.Message;
      setTimeout(()=>{
        this.messagesuccess="";
        window.location.reload()
      },1500)
    }else if(response.Message=="Il y a déjà une formation prévue à cette date") {
      this.messageerror=response.Message;
      setTimeout(() => {
        this.messageerror="";
      }, 3500);
    }else if(response.Message=="La date de fin de la formation doit être après la date de début") {
      this.messageerror=response.Message;
      setTimeout(() => {
        this.messageerror="";
      }, 3500);
    }else if(response.Message=="La date de début de la formation doit être aujourd'hui ou après") {
      this.messageerror=response.Message;
      setTimeout(() => {
        this.messageerror="";
      }, 3500);
    }else{
      this.messageerror=response.Message;
      setTimeout(() => {
        this.messageerror="";
      }, 3500);
    }
  })
}


validatePrix(Prix: string): boolean {
  const numericRegex = /^[0-9]/;
  return numericRegex.test(Prix);
}

}

