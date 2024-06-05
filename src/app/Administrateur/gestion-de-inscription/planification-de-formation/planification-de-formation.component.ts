import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';
import { MatDialogRef } from '@angular/material/dialog';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-planification-de-formation',
  templateUrl: './planification-de-formation.component.html',
  styleUrls: ['./planification-de-formation.component.scss']
})
export class PlanificationDeFormationComponent implements OnInit,OnChanges{

listeFormation: any;
listeFormateur: any;
messagesuccess: any;
messageerror: any;


  constructor(private _service:ServiceAdministrateurService,public dialogRef: MatDialogRef<PlanificationDeFormationComponent> ){}

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this._service.filtrerFormations(localStorage.getItem("token")).subscribe((data:any)=>{
      this.listeFormation=data.TableFormation;
      console.log(data.TableFormation)
    })

    this._service.formateursDisponibles(localStorage.getItem("token")).subscribe((data:any)=>{
      this.listeFormateur=data.TableFormateurAF;
      console.log(data.TableFormateurAF)
    })
  }

  Formationid: any;
  Formateurid: any;

  planifierFormation() {
    let formdata = new FormData()
    formdata.append('formationId', this.Formationid)
    formdata.append('formateurId', this.Formateurid)
    this._service.planifierFormation(localStorage.getItem("token"),formdata).subscribe((data:any)=>{
      if (data.Message="Il doit y avoir au moins 3 inscriptions"){
        this.messageerror=data.Message
        setTimeout(() => {
          this.messageerror="";
        }, 3500);
      }else{
      this.messagesuccess=data.Message;
      setTimeout(() => {
        this.messagesuccess="";
        window.location.reload()
      }, 3500);
      }
    },()=>{
      this.messageerror="Aucun participant inscrit dans cette formation";
      setTimeout(() => {
        this.messageerror="";
      }, 3500);
    })
  }
}