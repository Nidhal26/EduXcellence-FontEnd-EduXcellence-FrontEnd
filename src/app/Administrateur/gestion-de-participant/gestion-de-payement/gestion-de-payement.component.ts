import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyErrorStateMatcher } from '../../gestion-de-formateurs/modifier-formateur/modifier-formateur.component';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gestion-de-payement',
  templateUrl: './gestion-de-payement.component.html',
  styleUrl: './gestion-de-payement.component.scss'
})
export class GestionDePayementComponent implements OnInit {

  panelOpenState = false;
  hide = true;

  inputFormControl1 = new FormControl();

  matcher = new MyErrorStateMatcher();
  
  constructor(private _service:ServiceAdministrateurService,public dialogRef: MatDialogRef<GestionDePayementComponent>){  }
  ngOnInit(): void {
    let formdata = new FormData();
    formdata.append('idparticipant',this._service.getIDF());
    this._service.listerLesPayementsdUnSeulParticipant(formdata,localStorage.getItem("token")).subscribe((response:any)=>{
      if (response.TablePayement){
        this.ListPayement=response.TablePayement
  }})
  }

ListPayement:any

onDownload(fileName: string): void {
  this._service.download(fileName).subscribe(
    blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    error => {
   //   this.message = 'File download failed!';
    }
  );
}

}

