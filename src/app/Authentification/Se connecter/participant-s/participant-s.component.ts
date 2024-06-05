import { Component } from '@angular/core';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-participant-s',
  templateUrl: './participant-s.component.html',
  styleUrl: './participant-s.component.css'
})
export class ParticipantSComponent {
messagealert: any;
messageerror: any;

closeAlert() {
throw new Error('Method not implemented.');
}
messagesuccess: any;

  constructor( private _service:ServiceAuthentificationService,private router:Router){
    
  }
motdepasse="";
email="";

connexion() {
  if (this.email==''){
    this.messagealert = "Email Obligatoire"
    setTimeout(() => {
      this.messagealert = ""
    }, 3500);
    return;
  }
  if (this.motdepasse==''){
    this.messagealert = "Mot De Passe"
    setTimeout(() => {
      this.messagealert = ""
    }, 3500);
    return;
  }
   let formdata = new FormData();
   formdata.append("email",this.email);
   formdata.append("motDePasse",this.motdepasse);
 this._service.Connection(formdata).subscribe((response:any)=>{
  if ( response.verif == "true" ){
    localStorage.setItem('reload',"active")
    this.messagesuccess = response.Message;
    setTimeout(() => {
    this.router.navigate(['/']);
    }, 3500);
    console.log(response.Message)
    localStorage.setItem("token",response.Token);
  }else{
    this.messageerror = response.Message;
    setTimeout(() => {
      this.messageerror = "";
    }, 3500);
    setTimeout(() => {
      this.messageerror = "";
    }, 3500);
  }
  })}
}
