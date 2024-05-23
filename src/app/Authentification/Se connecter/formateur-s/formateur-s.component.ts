import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';

@Component({
  selector: 'app-formateur-s',
  templateUrl: './formateur-s.component.html',
  styleUrl: './formateur-s.component.css'
})
export class FormateurSComponent {

Matricule= "";
motdepasse="";
messageerror: any;
messagealert: any;
messagesuccess: any;

constructor(private _service:ServiceAuthentificationService,private router:Router){

}

closeAlert() {
  this.messageerror  = false; 
}

isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

ConnexionFormateur() {
if (this.Matricule==""){
  this.messagealert="Email Obligatoire"
  setTimeout(() => {
    this.messagealert = ""
  }, 2500);
  return;
}
if (this.motdepasse==""){
  this.messagealert = "Mot de passe Obligatoire"
  setTimeout(() => {
    this.messagealert = ""
    }, 2500);
    return;
    }

    let formdata = new FormData()
    formdata.append('email', this.Matricule)
    formdata.append('motDePasse', this.motdepasse)
        this._service.ConnectionFormateur(formdata).subscribe(
          (data:any) => {
            if (data.Message != "Invalid email or password"){
               this.messagesuccess = data.Message
            setTimeout(() => {
              this.messagesuccess = ""
              this.router.navigate(['/']);
              }, 2500);
              localStorage.setItem("token",data.Token)
            }else{
              this.messageerror = data.Message
              setTimeout(() => {
                this.messageerror = ""
                }, 2500);
            }
              },
              error => {
                this.messageerror = "Email ou mot de passe incorrect"
                setTimeout(() => {
                  this.messageerror = ""
                  }, 2500);
                  }
                  );
                  

}

}
