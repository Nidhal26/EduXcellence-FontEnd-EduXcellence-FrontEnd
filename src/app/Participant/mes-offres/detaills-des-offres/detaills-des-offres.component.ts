import { Component, OnInit } from '@angular/core';
import { ServiceAdministrateurService } from '../../../Administrateur/Service-administrateur/service-administrateur.service';
import { ServiceParticipantService } from '../../Service-participant/service-participant.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ServiceFormateurService } from '../../../Formateur/Service-formateur/service-formateur.service';

@Component({
  selector: 'app-detaills-des-offres',
  templateUrl: './detaills-des-offres.component.html',
  styleUrl: './detaills-des-offres.component.scss'
})
export class DetaillsDesOffresComponent implements OnInit {
  formation: any;
  themedeformation: any;
  datedebut: any;
  datefin: any;
  url: any;
  dateEvaluation: any;
  formateurid : any;
  listeprogramme: any;
  cours: any;
  participantid: any;

  

  constructor(public dialog: MatDialog,private _service:ServiceFormateurService,private _serviceAdmin:ServiceAdministrateurService,private _serviceparticipant:ServiceParticipantService) {}

  ngOnInit(): void {
    this._serviceparticipant.RecupererId(localStorage.getItem("token")).subscribe((data:any)=>{
      this.participantid=data.id
    })
      let formdata3 = new FormData()
      formdata3.append('formateurID',this._serviceparticipant.getIDFormateur())
      formdata3.append('formationid',this._serviceparticipant.getIDF())
      this._service.getFilesByFormationId(localStorage.getItem('token'),formdata3).subscribe((response :any) => {
        this.listeprogramme = response.cours;
      }, error => {
        console.error(error);
      });

    let formdata = new FormData()
    formdata.append('id',this._serviceparticipant.getIDF())
    this._service.detailsFormationFormateur(formdata,localStorage.getItem('token')).subscribe((response:any)=>{
  
      if (response.Formation){
        this.themedeformation=response.Formation.themeFormation
        this.datedebut=this.formatDate(new Date(response.Formation.datedebut))
        this.datefin=this.formatDate(new Date(response.Formation.datefin))
    }})

    let formdata1 = new FormData()
    formdata1.append('formationId',this._serviceparticipant.getIDF())
    this._service.listerUneEvaluation(localStorage.getItem("token"),formdata1).subscribe((data:any)=>{
      this.dateEvaluation=data.Dateeval
      this.url=data.Lien
    })

    
  }

formatDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

getFileFormation(cour: any) {
  this._service.getFileFormation(this._serviceparticipant.getIDFormateur(),this._serviceparticipant.getIDF(), cour).subscribe((response: HttpResponse<ArrayBuffer>) => {
    const blob = new Blob([response.body as any], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(url, '_blank');
  });
}

downloadPdf(): void {
 this._serviceparticipant.downloadAttestation(this._serviceparticipant.getIDF(),this.participantid).subscribe(response => {
  console.log("this._serviceparticipant.getIDF() ",this._serviceparticipant.getIDF())
  console.log("this.participantid) ",this.participantid)
    const blob = new Blob([response], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'certification.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  });
}
}