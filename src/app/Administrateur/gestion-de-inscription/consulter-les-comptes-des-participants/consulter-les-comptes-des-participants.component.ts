import { Component, ViewChild } from '@angular/core';
import { ModifierParticipantComponent } from '../modifier-participant/modifier-participant.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ConsulterLesDemandesDinscriptionComponent } from '../consulter-les-demandes-dinscription/consulter-les-demandes-dinscription.component';
import { GestionDePayementComponent } from '../gestion-de-payement/gestion-de-payement.component';



export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
  formateur_affecté:string
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-consulter-les-comptes-des-participants',
  templateUrl: './consulter-les-comptes-des-participants.component.html',
  styleUrl: './consulter-les-comptes-des-participants.component.css'
})

export class ConsulterLesComptesDesParticipantsComponent {


  openDialog2() {
    const dialogRef = this.dialog.open(GestionDePayementComponent);
   
       dialogRef.afterClosed().subscribe((result: any) => {
         console.log(`Dialog result: ${result}`);
       });
   }
     
   openDialog3() {
    const dialogRef = this.dialog.open(ModifierParticipantComponent);
   
       dialogRef.afterClosed().subscribe((result: any) => {
         console.log(`Dialog result: ${result}`);
       });
   }

     displayedColumns: string[] = ['id', 'name', 'formateur_affecté','progress', 'option'];
     dataSource: MatTableDataSource<UserData>;
   
     @ViewChild(MatPaginator)
     paginator!: MatPaginator;
     @ViewChild(MatSort)
     sort!: MatSort;
   
     constructor(public dialog: MatDialog) {
       // Create 100 users
       const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
   
       // Assign the data to the data source for the table to render
       this.dataSource = new MatTableDataSource(users);
   
   
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
       const dialogRef = this.dialog.open(ConsulterLesDemandesDinscriptionComponent,{width: '1500px',});
   
       dialogRef.afterClosed().subscribe((result: any) => {
        
         console.log(`Dialog result: ${result}`);
       });
     }
   }
   
   
   /** Builds and returns a new User. */
   function createNewUser(id: number): UserData {
     const name =
       NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
       ' ' +
       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
       '.';
   
     return {
       id: id.toString(),
       name: name,
       progress: Math.round(Math.random() * 100).toString(),
       fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
       formateur_affecté:name
     };
   
   
     /*----------------------------------------------------------------------------------------------------------------------------------*/
   
   
   
   
     
   
   }