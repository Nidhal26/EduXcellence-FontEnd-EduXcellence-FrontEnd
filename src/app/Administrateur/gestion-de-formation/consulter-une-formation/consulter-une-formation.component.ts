import { Component, ViewChild } from '@angular/core';
import { AjouterUneFormationComponent } from '../ajouter-une-formation/ajouter-une-formation.component';
import { ModifierUneFormationComponent } from '../modifier-une-formation/modifier-une-formation.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EvaluationComponent } from '../evaluation/evaluation.component';

export interface UserData {
  id: string;
  name: string;
  fruit: string;
  datededebut: string;
  datedefin : string;
  
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
  selector: 'app-consulter-une-formation',
  templateUrl: './consulter-une-formation.component.html',
  styleUrl: './consulter-une-formation.component.css'
})
export class ConsulterUneFormationComponent {

  
openDialog2() {
  const dialogRef = this.dialog.open(ModifierUneFormationComponent);
 
     dialogRef.afterClosed().subscribe((result: any) => {
       console.log(`Dialog result: ${result}`);
     });
 }
 openDialog3() {
  const dialogRef = this.dialog.open(EvaluationComponent,{ width:"500px"});
 
     dialogRef.afterClosed().subscribe((result: any) => {
       console.log(`Dialog result: ${result}`);
     });
 }
   
 
   displayedColumns: string[] = ['id', 'name' ,'datededebut','datedefin', 'option'];
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
     const dialogRef = this.dialog.open(AjouterUneFormationComponent);
 
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
     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    datededebut : name,
    datedefin : name,
   };
 
 
   /*----------------------------------------------------------------------------------------------------------------------------------*/
 
 
 
 
}
