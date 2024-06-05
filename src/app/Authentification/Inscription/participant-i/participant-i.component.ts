import { Component } from '@angular/core';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participant-i',
  templateUrl: './participant-i.component.html',
  styleUrl: './participant-i.component.css'
})
export class ParticipantIComponent {

messagesuccess: any="";
messagealert: any="";
messageerror: any="";

NiveauDetudeTouched: boolean = false;
NomPrenomTouched: boolean = false;
EmailTouched: boolean = false;
MotDePasseTouched: boolean = false;

NomPrenom: any;
Email: any;
MotDePasse: any;
Niveaudetude: any;

  constructor(private _service:ServiceAuthentificationService,private router:Router){

  }


InscriptionParticipant(){
  if (!this.NomPrenom) {
    this.NomPrenomTouched = true;
    setTimeout(() => {
      this.NomPrenomTouched = false;
    }, 3500);
    return;
  }
  if (!this.Email) {
    this.EmailTouched = true;
    setTimeout(() => {
      this.EmailTouched = false;
    }, 3500);
    return;
  }
  if (!this.MotDePasse) {
    this.MotDePasseTouched = true;
    setTimeout(() => {
      this.MotDePasseTouched = false;
    }, 3500);
    return;
  }
  if (!this.Niveaudetude) {
    this.NiveauDetudeTouched = true;
    setTimeout(() => {
      this.NiveauDetudeTouched = false;
    }, 3500);
    return;
  }
  let formdata = new FormData();
  formdata.append('nomPrenom',this.NomPrenom);
  formdata.append('email',this.Email);
  formdata.append('motDePasse',this.MotDePasse);
  formdata.append('niveauDEtude',this.Niveaudetude);
  this._service.InscriptionParticipant(formdata).subscribe(
    (data:any)=>{
      if (data.Message=="Ajouté avec Succès"){
        this.messagesuccess=data.Message;
        setTimeout(() => {
          this.router.navigate(["/Authentification/Connexion/Participant"]);
        }, 3500); 
    }else if (data.Message=="Email existe Déjà"){
      this.messageerror=data.Message;}
      setTimeout(() => {
        this.messageerror  = "";
      }, 3500); 
    },
    (error) => {
      this.messageerror=error.Message;
      setTimeout(() => {
        this.messageerror  = "";
      }, 3500); 
    }
  );
}


closeAlert() {
  this.messageerror  = false; 
}

isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

isStrongPassword(password: string): boolean {
  return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
}

closeAlert2() {
  this.NiveauDetudeTouched = false;
  
  this.EmailTouched = false;
  this.MotDePasseTouched = false;
  }

}
