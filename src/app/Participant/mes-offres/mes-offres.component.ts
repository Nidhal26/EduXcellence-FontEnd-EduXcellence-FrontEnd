import { Component, OnInit } from '@angular/core';
import { ServiceParticipantService } from '../Service-participant/service-participant.service';
import { Router } from '@angular/router';
import { DetaillsDesOffresComponent } from './detaills-des-offres/detaills-des-offres.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mes-offres',
  templateUrl: './mes-offres.component.html',
  styleUrl: './mes-offres.component.scss'
})
export class MesOffresComponent implements OnInit {

listeFormations: any;
  

  constructor(public dialog: MatDialog, private _service : ServiceParticipantService,private router:Router){}
  

  ngOnInit(): void {
    this._service.RecupererId(localStorage.getItem("token")).subscribe((data:any)=>{
        const id = data.id
        let formdata = new FormData();
        formdata.append('idParticipant',id);
    
        this._service.listerLesFormationAffecterAParticipant(localStorage.getItem("token"),formdata).subscribe((response:any)=>{
          if (response.TableFormationAffecterAParticipant){
           
            this.listeFormations=response.TableFormationAffecterAParticipant
          
    }})
    })

  }

    openDialog(x:any) {
     console.log(x) 
     
      const dialogRef = this.dialog.open(DetaillsDesOffresComponent,{width:'500px'});
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      });
    }

  setidFormation(x: any,y:any) {
     this._service.SetIDF(x)
     this._service.SetIDFormateur(y)
}

}
