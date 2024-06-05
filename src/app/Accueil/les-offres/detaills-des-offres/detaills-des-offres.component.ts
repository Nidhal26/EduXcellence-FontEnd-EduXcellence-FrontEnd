import { Component, OnInit } from '@angular/core';
import { ServiceAdministrateurService } from '../../../Administrateur/Service-administrateur/service-administrateur.service';
import { ServiceParticipantService } from '../../../Participant/Service-participant/service-participant.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detaills-des-offres',
  templateUrl: './detaills-des-offres.component.html',
  styleUrl: './detaills-des-offres.component.scss'
})
export class DetaillsDesOffresComponent implements OnInit {
contacter() {
  this.router.navigate(["/EduXcellence/Contact"])
  this.dialogRef.close()
}
  token: string | null | undefined;

  id: any;
  user: any;
messagesuccess: any;
messagealert: any;
messageerror: any;


  constructor(private _service:ServiceAdministrateurService,private _serviceParticipant:ServiceParticipantService,public dialogRef: MatDialogRef<DetaillsDesOffresComponent> , private router:Router){}

  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this._service.ListerUnSeulFormation(this._service.getIDF(),localStorage.getItem("token")).subscribe((response:any)=>{
      console.log(response)
      this.DD=this.formatDate(new Date(response.Formation.datedebut));
      this.DF=this.formatDate(new Date(response.Formation.datefin));
      this.UneFormation=response.Formation
    })

    this._serviceParticipant.RecupererId(localStorage.getItem("token")).subscribe((data:any)=>{
      this.id=data.id
      this.user=data.user
    })

  }
  UneFormation:any
  DD:any
  DF:any

  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  }

  InscriptionAuCours(){
    if(this.token==null){
      this.dialogRef.close()
      this.router.navigate(["/Authentification/Connexion/Participant"])
    }
    else if(this.user=='Participant'){
    let formdata = new FormData();
    formdata.append('FormationID',this._service.getIDF());
    formdata.append('ParticipantID',this.id);

    this._serviceParticipant.InscriptionAuCours(localStorage.getItem('token'),formdata).subscribe((response:any)=>{
      if ( response.Message=="Votre inscription est enregistrée avec succès, Veuillez attendre la vérification de l'administrateur"){
        this.messagesuccess=response.Message
        setTimeout(() => {
          this.messagesuccess = "";
          this.dialogRef.close()
        }, 2500);
      }else if (response.Message=="Vous êtes déjà inscrit à cette formation"){
        this.messagealert=response.Message
        setTimeout(() => {
          this.messagealert = "";
          }, 2500);
      }else{
        this.messageerror=response.Message
        setTimeout(() => {
          this.messageerror = "";
          }, 2500);
      }
  });
    }
}
}
