import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PlanificationDeFormationComponent } from '../planification-de-formation/planification-de-formation.component';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';

export interface UserData {
  nomprenom: any;
  formation: any;
  datedinscription: any;
  verificationdinscrit: any;
}

@Component({
  selector: 'app-consulter-les-inscriptions',
  templateUrl: './consulter-les-inscriptions.component.html',
  styleUrl: './consulter-les-inscriptions.component.scss'
})
export class ConsulterLesInscriptionsComponent implements OnInit{

     displayedColumns: string[] = ['nomprenom', 'formation', 'datedinscription','verificationdinscrit'];
     dataSource: MatTableDataSource<UserData>=new MatTableDataSource<UserData>([]);
   
     @ViewChild(MatPaginator)
     paginator!: MatPaginator;
     @ViewChild(MatSort)
     sort!: MatSort;
   
     constructor(public dialog: MatDialog,private _service:ServiceAdministrateurService) {
     }
  ngOnInit(): void {
    this.loadFormateurs();
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
   
   
   
     openDialog() {
       const dialogRef = this.dialog.open(PlanificationDeFormationComponent);
   
       dialogRef.afterClosed().subscribe((result: any) => {
        
         console.log(`Dialog result: ${result}`);
       });
     }

     loadFormateurs() {
      this._service.listerLesPayements(localStorage.getItem('token')).subscribe((response: any) => {
        if (response.listerParticipantsInscritAuFormation) {
          this.dataSource.data = response.listerParticipantsInscritAuFormation.map((formation: any) => ({
            nomprenom:formation.nomprenom,
            formation:formation.formation,
            datedinscription:formation.datedinscription,
            verificationdinscrit:formation.verificationdinscrit
          }));
          
        } else {
          this.dataSource.data = [];
          
        }
        console.log(this.dataSource.data)
      });
    }
   }
  
