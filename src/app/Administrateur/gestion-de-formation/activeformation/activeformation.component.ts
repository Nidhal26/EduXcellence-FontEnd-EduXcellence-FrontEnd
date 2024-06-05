import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';
import { MyErrorStateMatcher } from '../../gestion-de-formateurs/modifier-formateur/modifier-formateur.component';
import { ModifierUneFormationComponent } from '../modifier-une-formation/modifier-une-formation.component';

@Component({
  selector: 'app-activeformation',
  templateUrl: './activeformation.component.html',
  styleUrl: './activeformation.component.scss'
})
export class ActiveformationComponent {
 
  hide = true;

  
  inputFormControl1 = new FormControl();
  inputFormControl2 = new FormControl();
  inputFormControl3 = new FormControl();
  inputFormControl4 = new FormControl();

  matcher = new MyErrorStateMatcher();

  
  constructor(private datePipe: DatePipe,private _service:ServiceAdministrateurService,public dialogRef: MatDialogRef<ModifierUneFormationComponent>){
    this._service.ListerUnSeulFormation(this._service.getIDF(),localStorage.getItem("token")).subscribe((response:any)=>{
      if (response.Formation){
       this.themedeformation=response.Formation.themeFormation
       this.Description=response.Formation.desciption
       this.Prix=response.Formation.prix
       this.datedebut=response.Formation.datedebut
       this.datefin=response.Formation.datefin
      }else{
        this.messageerror = response.Message
        setTimeout(() => {
          this.messageerror = ""
          this.dialogRef.close();
        }, 3500);
      }
    })
  }



  themedeformation:any
  Description:any
  Prix:any
  datedebut:any
  datefin:any

  messagealert: any;
  messageerror: any;
  messagesuccess:any;

  ModifierUneFormation(){
    const dateDebut = new Date(this.datedebut);
    const dateFin = new Date(this.datefin);
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
    const formdata: any = {
      themeFormation: this.themedeformation,
      desciption: this.Description,
      datedebut: dateDebut,
      datefin: dateFin,
      prix: this.Prix
    };
    this._service.ModifierUneFormation(formdata,localStorage.getItem('token'),this._service.getIDF()).subscribe((response:any)=>{
      if (response.Message =="Mise à jour avec succès"){
        this.ActiverFormation()
        setTimeout(()=>{
          this.messagesuccess="";
          window.location.reload();
        },3500)
      }else if (response.Message=="Il y a déjà une formation prévue à cette date"){
        this.messageerror="Il y a déjà une formation prévue à cette date";
        setTimeout(() => {
          this.messageerror="";
        }, 3500);
      }else if (response.Message=="La date de fin de la formation doit être après la date de début"){
        this.messageerror="La date de fin de la formation doit être après la date de début";
        setTimeout(() => {
          this.messageerror="";
        }, 3500);
      }else if (response.Message=="La date de début de la formation doit être aujourd'hui ou après"){
        this.messageerror="La date de début de la formation doit être aujourd'hui ou après";
        setTimeout(() => {
          this.messageerror="";
        }, 3500);
      }
    })
  }
  ActiverFormation(){
    let verif = confirm('voulez vous activer formation')
    if (verif){
    let formdata = new FormData()
    formdata.append('id',this._service.getIDF())
    this._service.ActiverFormation(localStorage.getItem('token'),formdata).subscribe((response: any) => {
      if(response.Message){
        this.messagesuccess=response.Message
        setTimeout(() => {
          this.messagesuccess=""
          window.location.reload();
        }, 3500);
  }else{
    this.messageerror=response.Message
    setTimeout(() => {
      this.messageerror=""
      }, 3500);
  }
})}}

  
  validatePrix(Prix: string): boolean {
    const numericRegex = /^[0-9]/;
    return numericRegex.test(Prix);
  }
    // Custom date formatting function (MM-dd-yyyy)
  

}

