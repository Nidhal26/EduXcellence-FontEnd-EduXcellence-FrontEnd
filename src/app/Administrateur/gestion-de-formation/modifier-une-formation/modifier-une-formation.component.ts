import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../gestion-de-formateurs/modifier-formateur/modifier-formateur.component';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modifier-une-formation',
  templateUrl: './modifier-une-formation.component.html',
  styleUrl: './modifier-une-formation.component.css'
})
export class ModifierUneFormationComponent {

  
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
        }, 2500);
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
      }, 2500);
      return;
    }
    if (!this.Description){
      this.messagealert = "Description Obligatoire";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
      return;
    }
    if (!this.Prix){
      this.messagealert = "Prix Obligatoire";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
      return;
    }
    if (!this.validatePrix(this.Prix)){
      this.messagealert = "Prix doit contient des chiffre";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
      return;
    }
    if (!this.datedebut){
      this.messagealert = "Date Debut Obligatoire";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
      return;
    }
    if (!this.datefin){
      this.messagealert = "Date Fin Obligatoire";
      setTimeout(() => {
        this.messagealert = "";
      }, 2500);
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

  validatePrix(Prix: string): boolean {
    const numericRegex = /^[0-9]/;
    return numericRegex.test(Prix);
  }
    // Custom date formatting function (MM-dd-yyyy)
  

}

