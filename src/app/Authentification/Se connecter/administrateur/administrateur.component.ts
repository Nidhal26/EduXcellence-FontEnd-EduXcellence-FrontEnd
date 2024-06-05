import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrl: './administrateur.component.css'
})
export class AdministrateurComponent {

ID="";
motdepasse="";


messagealert: any;
messageerror: any;
messagesuccess: any;

constructor(private _service:ServiceAuthentificationService,private router:Router){

}

closeAlert() {
  this.messageerror  = false; 
}

isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

ConnexionAdministrateur() {
  if(this.ID == ""){
    this.messagealert = "ID Obligatoire"
    setTimeout(() => {
      this.messagealert = ""
    }, 3500);
    return;
  }
  if(this.motdepasse==""){
    this.messagealert = "Mot de passe Obligatoire"
    setTimeout(() => {
      this.messagealert = ""
      }, 3500);
      return;
  }
let formdata = new FormData();
formdata.append('id', this.ID);
formdata.append("MotDePasse",this.motdepasse)
this._service.ConnectionAdmin(formdata).subscribe((response:any)=>{
  if(response.Message == "Invalid ID or password"){
    this.messageerror = response.Message; 
    setTimeout(() => {
     this.messageerror = ""; 
    }, 3500);
    
  }else{
    localStorage.setItem('reload',"active")
    this.messagesuccess = response.Message;
    setTimeout(() => {
      this.messagesuccess = "";
      this.router.navigate(["/Administrateur/Dashboard"])
    }, 3500);
    localStorage.setItem("token",response.Token)
  }
})

this._service.changeData(localStorage.getItem("token"));
}


}
