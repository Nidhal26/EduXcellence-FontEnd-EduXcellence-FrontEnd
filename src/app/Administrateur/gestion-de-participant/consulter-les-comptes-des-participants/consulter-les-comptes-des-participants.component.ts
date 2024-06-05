import { Component, ViewChild } from '@angular/core';
import { ModifierParticipantComponent } from '../modifier-participant/modifier-participant.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { GestionDePayementComponent } from '../gestion-de-payement/gestion-de-payement.component';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';



export interface UserData {
  id: any;
  email: any;
  nomPrenom: any;
  niveauDEtude: any;
  PayementID:any
  verification:any
  AttestaionID:any
  FormationID:any
}


@Component({
  selector: 'app-consulter-les-comptes-des-participants',
  templateUrl: './consulter-les-comptes-des-participants.component.html',
  styleUrl: './consulter-les-comptes-des-participants.component.css'
})

export class ConsulterLesComptesDesParticipantsComponent {


  messagesuccess: any;
  messageerror: any;

  ListPayement:any
  ListAttestaion:any
  ListFormation:any

  openDialog2(x:any) {
    const dialogRef = this.dialog.open(GestionDePayementComponent);
      this._service.SetIDF(x)
       dialogRef.afterClosed().subscribe((result: any) => {
         console.log(`Dialog result: ${result}`);
       });
   }
     
   openDialog3(x:any) {
    this._service.SetIDF(x)
    const dialogRef = this.dialog.open(ModifierParticipantComponent);
       dialogRef.afterClosed().subscribe((result: any) => {
         console.log(`Dialog result: ${result}`);
       });
   }

     displayedColumns: string[] = ['email', 'nomPrenom', 'DetailleDePaiement'];
     dataSource: MatTableDataSource<UserData>=new MatTableDataSource<UserData>([]);
   
     @ViewChild(MatPaginator)
     paginator!: MatPaginator;
     @ViewChild(MatSort)
     sort!: MatSort;
   
     constructor(public dialog: MatDialog, private _service: ServiceAdministrateurService) {
      this.loadParticipants();
     }
   
     Deconnecter() {
      localStorage.clear()
      }
      
     ngAfterViewInit() {
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
     }
   
     applyFilter(event: Event) {
       const filterValue = (event.target as HTMLInputElement).value;
       this.dataSource.filter = filterValue.trim().toLowerCase();
   
       if (this.dataSource.paginator) {
         this.dataSource.paginator.firstPage();
       }
     }
   
     loadParticipants() {
      this._service.ConsulterLesParticipants(localStorage.getItem('token')).subscribe((response: any) => {
        if (response.TableParticipant) {
          this.dataSource.data = response.TableParticipant.map((participant: any) => ({
            id: participant.id,
            email: participant.email.toString(),
            nomPrenom: participant.nomPrenom,
            verification:participant.verification,
            payementID:participant.payementID,
            formationID:participant.formationID
          }));
       
        console.log(this.dataSource.data)
        } else {
          this.dataSource.data = [];
        }
      });
    }
  
  
   
 
   
    }
   
     /*----------------------------------------------------------------------------------------------------------------------------------*/
   
   