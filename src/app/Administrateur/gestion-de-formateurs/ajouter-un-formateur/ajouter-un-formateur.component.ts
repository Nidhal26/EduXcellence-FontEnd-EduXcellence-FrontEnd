import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../modifier-formateur/modifier-formateur.component';
import { strongPasswordValidator } from '../modifier-formateur/strongPasswordValidator';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-un-formateur',
  templateUrl: './ajouter-un-formateur.component.html',
  styleUrl: './ajouter-un-formateur.component.css'
})
export class AjouterUnFormateurComponent {
  hide = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  motdepasseFormControl = new FormControl('',[Validators.required, Validators.minLength(10) ,strongPasswordValidator()]);
  telephoneFormControl = new FormControl('', [Validators.required, strongPasswordValidator(),Validators.minLength(8)]);
  photoFormControl = new FormControl('', [Validators.required, Validators.email]);
  cvFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  prenomFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  /*------------------------------------------------------------------------------------------------------ */

  NomPrenom: any;
  Email: any;
  MotDePasse: any;
  NumTel: any;

  NumTelTouched: boolean = false;
  NomPrenomTouched: boolean = false;
  EmailTouched: boolean = false;
  MotDePasseTouched: boolean = false;

  messagesuccess: any;
  messagealert: any;
  messageerror: any;

  constructor(private _service:ServiceAdministrateurService,private router:Router){

  }

  ajouterUnFormateur(){
    if (!this.NomPrenom) {
      this.NomPrenomTouched = true;
      setTimeout(() => {
        this.NomPrenomTouched = false;
      }, 2500);
      return;
    }
    if (!this.Email) {
      this.EmailTouched = true;
      setTimeout(() => {
        this.EmailTouched = false;
      }, 2500);
      return;
    }
    if (!this.MotDePasse) {
      this.MotDePasseTouched = true;
      setTimeout(() => {
        this.MotDePasseTouched = false;
      }, 2500);
      return;
    }
    if (!this.NumTel) {
      this.NumTelTouched = true;
      setTimeout(() => {
        this.NumTelTouched = false;
      }, 2500);
      return;
    }
    let formdata = new FormData();
  formdata.append('nomPrenom',this.NomPrenom);
  formdata.append('email',this.Email);
  formdata.append('motDePasse',this.MotDePasse);
  formdata.append('numTelephone',this.NumTel);
  this._service.ajouterFormateur(formdata).subscribe(
    (data:any)=>{
      if (data.Message=="Ajouté avec Succés"){
        this.messagesuccess=data.Message;
        setTimeout(() => {
          this.router.navigate(["/Administrateur/GestionDesFormateurs/NouvelleFormateur"]);
        }, 2500);
    }else{
      this.messageerror=data.Message;}
      setTimeout(() => {
        this.messageerror  = false;
      }, 2500); 
    },
    (error) => {
      this.messageerror=error.Message;
      setTimeout(() => {
        this.messageerror  = false;
      }, 2500); 
    }
  );
  }

}
