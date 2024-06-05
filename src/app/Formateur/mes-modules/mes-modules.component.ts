import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouterModuleComponent } from '../ajouter-module/ajouter-module.component';
import { ServiceFormateurService } from '../Service-formateur/service-formateur.service';
import { ServiceParticipantService } from '../../Participant/Service-participant/service-participant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-modules',
  templateUrl: './mes-modules.component.html',
  styleUrl: './mes-modules.component.scss'
})
export class MesModulesComponent implements OnInit{
  id: any;
  MesFormation: any;

  constructor(public dialog: MatDialog,private _service:ServiceFormateurService,private _serviceparticipant:ServiceParticipantService,private router:Router) {}

  ngOnInit(): void {
    this._serviceparticipant.RecupererId(localStorage.getItem('token')).subscribe((data:any)=>{
      let formdata  = new FormData();
    formdata.append('idFormateur',data.id);
    this._service.listerMesFormationFormateur(localStorage.getItem('token'),formdata).subscribe((data:any)=>{
      this.MesFormation=data.MesFormation
      this.id=data.idFormation
    })
    })

  }

  setidFormation(x:any) {
    this._service.setX(x)
  }

}
