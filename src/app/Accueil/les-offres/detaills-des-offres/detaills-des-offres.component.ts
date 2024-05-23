import { Component, OnInit } from '@angular/core';
import { ServiceAdministrateurService } from '../../../Administrateur/Service-administrateur/service-administrateur.service';

@Component({
  selector: 'app-detaills-des-offres',
  templateUrl: './detaills-des-offres.component.html',
  styleUrl: './detaills-des-offres.component.scss'
})
export class DetaillsDesOffresComponent implements OnInit {


  constructor(private _service:ServiceAdministrateurService){}

  ngOnInit(): void {
    this._service.ListerUnSeulFormation(this._service.getIDF(),localStorage.getItem("token")).subscribe((response:any)=>{
      this.DD=this.formatDate(new Date(response.Formation.datedebut));
      this.DF=this.formatDate(new Date(response.Formation.datefin));
      this.UneFormation=response.Formation
    })
  }
  UneFormation:any
  DD:any
  DF:any

  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  }

}
