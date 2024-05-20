import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetaillsDesOffresComponent } from '../les-offres/detaills-des-offres/detaills-des-offres.component';
import { ServiceAdministrateurService } from '../../Administrateur/Service-administrateur/service-administrateur.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{


  constructor(public dialog: MatDialog, private _service:ServiceAdministrateurService) {}

  ngOnInit(): void {
    this._service.ConsulterLesFormation(localStorage.getItem('token')).subscribe((response:any)=>{
      if(response.TableFormation){
        this.listeFormation=response.TableFormation;
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DetaillsDesOffresComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  listeFormation:any;
}
