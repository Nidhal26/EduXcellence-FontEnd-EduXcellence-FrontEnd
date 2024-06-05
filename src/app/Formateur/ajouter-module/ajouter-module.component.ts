import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceFormateurService } from '../Service-formateur/service-formateur.service';
import { ServiceAdministrateurService } from '../../Administrateur/Service-administrateur/service-administrateur.service';
import { ServiceParticipantService } from '../../Participant/Service-participant/service-participant.service';

@Component({
  selector: 'app-ajouter-module',
  templateUrl: './ajouter-module.component.html',
  styleUrls: ['./ajouter-module.component.scss']
})
export class AjouterModuleComponent implements OnInit {
  programme: any;
  formateurid: any;

  constructor(public dialog: MatDialog,private _service:ServiceFormateurService,private _serviceAdmin:ServiceAdministrateurService,private _serviceparticipant:ServiceParticipantService) {}
  ngOnInit(): void {
   this._serviceparticipant.RecupererId(localStorage.getItem('token')).subscribe((data:any)=>{
    this.formateurid=data.id;
   })
  }

  selectedFiles: any[] = [];

  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
    console.log(this.selectedFiles)
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  insererleProgramme(){
    let formdata = new FormData()
    formdata.append('formationid', this._service.getX())
    formdata.append('formateurID', this.formateurid)
    this.selectedFiles.forEach(file => {
      formdata.append('files', file);
    });
    this._service.insererleProgramme(localStorage.getItem("token"),formdata).subscribe((data:any)=>{
      console.log(data)
    })
  }
  
}
