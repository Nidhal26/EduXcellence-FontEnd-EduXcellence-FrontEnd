import { Component, OnInit } from '@angular/core';
import { ErviceelementsupplementaireService } from '../serviceelementsupplementaire/erviceelementsupplementaire.service';
import { ServiceParticipantService } from '../../Participant/Service-participant/service-participant.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
closeAlert() {
throw new Error('Method not implemented.');
}

Contenu: any;
Sujet: any;
Email: any;
  token: any;
  email: any;
  messagealert: any;
messagesuccess: any;
messageerror: any;


constructor(private _service:ErviceelementsupplementaireService,private _serviceparticipant:ServiceParticipantService){}

  ngOnInit(): void {
    this.token = localStorage.getItem('token') ;
      this._serviceparticipant.RecupererId(this.token).subscribe((data:any)=>{
  this.Email=data.email
  console.log(this.Email)
})

  }
  isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

Envoyer() {
  
  
    if (!this.Sujet){
      this.messagealert="Veuillez remplir le champ de sujet";
      setTimeout(() => {
        this.messagealert=null;
      }, 3500);
    }
    if(!this.Contenu){
      this.messagealert="Veuillez remplir le champ de contenu"
      setTimeout(() => {
        this.messagealert=null
      }, 3500);
    }else{
      let formdata = new FormData()
      formdata.append('Contenu', this.Contenu);
      formdata.append('Sujet', this.Sujet);
      this._service.contactAdmin(formdata).subscribe(()=>{
       this.messagesuccess="Message envoyé avec succès"
       setTimeout(() => {
        this.messagesuccess=null
      }, 3500);
      })
    }
 
}


}

