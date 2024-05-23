import { Component, OnInit } from '@angular/core';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';

@Component({
  selector: 'app-mesformations',
  templateUrl: './mesformations.component.html',
  styleUrl: './mesformations.component.scss'
})
export class MesformationsComponent implements OnInit{

  constructor(private _service:ServiceAdministrateurService){}

  ngOnInit(): void {
this._service.formateurAffecte(localStorage.getItem('token'),this._service.getIDF()).subscribe((response:any)=>{
  if(response.TableFormateurAF)
    {
      this.listeformations=response.TableFormateurAF;
    }
})
}
listeformations:any
}
