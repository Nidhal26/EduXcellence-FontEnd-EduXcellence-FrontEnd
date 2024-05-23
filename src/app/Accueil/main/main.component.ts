import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetaillsDesOffresComponent } from '../les-offres/detaills-des-offres/detaills-des-offres.component';
import { ServiceAdministrateurService } from '../../Administrateur/Service-administrateur/service-administrateur.service';
import { ServiceParticipantService } from '../../Participant/Service-participant/service-participant.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{


  constructor(public dialog: MatDialog, private _service:ServiceAdministrateurService,private _serviceParticipant:ServiceParticipantService) {}

  ngOnInit(): void {
    this._service.ConsulterLesFormation(localStorage.getItem('token')).subscribe((response:any)=>{
      if(response.TableFormation){
        this.listeFormation=response.TableFormation;
        this.DD=this.formatDate(new Date(response.TableFormation.datedebut))
        this.DF=this.formatDate(new Date(response.TableFormation.datefin))
      }
    })
  }

  openDialog(x:any) {
    this._service.SetIDF(x)
    const dialogRef = this.dialog.open(DetaillsDesOffresComponent,{width:'500px'});
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  listeFormation:any;

  DD:any
  DF:any

  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  }

  InscriptionAuCours(){
    let formdata = new FormData();
    //formdata.append('FormationID',this.);
    //formdata.append('ParticipantID',localStorage.getItem('id'));

    this._serviceParticipant.InscriptionAuCours(formdata,localStorage.getItem('token')).subscribe((response:any)=>{
  });

}
}
