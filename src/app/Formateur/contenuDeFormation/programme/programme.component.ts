import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LienEvaluationComponent } from '../lien-evaluation/lien-evaluation.component';
import { AjouterModuleComponent } from '../../ajouter-module/ajouter-module.component';
import { ServiceFormateurService } from '../../Service-formateur/service-formateur.service';
import { ServiceAdministrateurService } from '../../../Administrateur/Service-administrateur/service-administrateur.service';
import { ServiceParticipantService } from '../../../Participant/Service-participant/service-participant.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrl: './programme.component.scss'
})
export class ProgrammeComponent implements OnInit {
  formation: any;
  themedeformation: any;
  datedebut: any;
  datefin: any;
  url: any;
  dateEvaluation: any;
  formateurid : any;
  listeprogramme: any;
  cours: any;

  

  constructor(public dialog: MatDialog,private _service:ServiceFormateurService,private _serviceAdmin:ServiceAdministrateurService,private _serviceparticipant:ServiceParticipantService) {}

  ngOnInit(): void {
    this._serviceparticipant.RecupererId(localStorage.getItem("token")).subscribe((data:any)=>{
      this.formateurid=data.id
      let formdata3 = new FormData()
      formdata3.append('formateurID',data.id)
      formdata3.append('formationid',this._service.getX())
      this._service.getFilesByFormationId(localStorage.getItem('token'),formdata3).subscribe((response :any) => {
        this.listeprogramme = response.cours;
        console.log(this.listeprogramme)
      }, error => {
        console.error(error);
      });
    })

    let formdata = new FormData()
    formdata.append('id', this._service.getX())
    this._service.detailsFormationFormateur(formdata,localStorage.getItem('token')).subscribe((response:any)=>{
  
      if (response.Formation){
        this.themedeformation=response.Formation.themeFormation
        this.datedebut=this.formatDate(new Date(response.Formation.datedebut))
        this.datefin=this.formatDate(new Date(response.Formation.datefin))
    }})

    let formdata1 = new FormData()
    formdata1.append('formationId', this._service.getX())
    this._service.listerUneEvaluation(localStorage.getItem("token"),formdata1).subscribe((data:any)=>{
      this.dateEvaluation=data.Dateeval
      this.url=data.Lien
    })

    
  }

ajouterEvaluation() {
    const dialogRef = this.dialog.open(LienEvaluationComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
     
    });
}
ajouterChapitre() {
  const dialogRef = this.dialog.open(AjouterModuleComponent);
  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);

  });
}

formatDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

getFileFormation(cour: any) {
  this._service.getFileFormation(this.formateurid, this._service.getX(), cour).subscribe((response: HttpResponse<ArrayBuffer>) => {
    const blob = new Blob([response.body as any], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(url, '_blank');
  });
}

}
