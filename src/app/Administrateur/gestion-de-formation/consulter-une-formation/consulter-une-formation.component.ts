import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AjouterUneFormationComponent } from '../ajouter-une-formation/ajouter-une-formation.component';
import { ModifierUneFormationComponent } from '../modifier-une-formation/modifier-une-formation.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';
import { MesformationsComponent } from '../mesformations/mesformations.component';
import { ActiveformationComponent } from '../activeformation/activeformation.component';

export interface UserData {
  idformation:any
  themeFormation: any;
  prix: any;
  datededebut: any;
  datedefin : any;
  affiche : any
  formateurID:any
}

@Component({
  selector: 'app-consulter-une-formation',
  templateUrl: './consulter-une-formation.component.html',
  styleUrl: './consulter-une-formation.component.css'
})
export class ConsulterUneFormationComponent  implements AfterViewInit {

LesFormateursAffectes(x: any) {
  this._service.SetIDF(x)
  const dialogRef = this.dialog.open(MesformationsComponent);
  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}
  
  displayedColumns: string[] = ['themeFormation', 'prix', 'datededebut', 'datedefin','optiondeformation'];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
messagesuccess: any=""
messageerror: any=""

  constructor(public dialog: MatDialog, private _service: ServiceAdministrateurService) {
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
    const dialogRef = this.dialog.open(AjouterUneFormationComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(x:any) {
    this._service.SetIDF(x)
    const dialogRef = this.dialog.open(ModifierUneFormationComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  loadFormateurs() {
    this._service.ConsulterLesFormation(localStorage.getItem('token')).subscribe((response: any) => {
      if (response.TableFormation) {
        this.dataSource.data = response.TableFormation.map((formation: any) => ({
          idformation:formation.idformation,
          themeFormation:formation.themeFormation,
          prix:formation.prix,
          datededebut:this.formatDate(new Date(formation.datedebut)),
          datedefin :this.formatDate(new Date(formation.datefin)),
          affiche : formation.affiche,
          formateurID:formation.formateurID,
        }));
        console.log(this.dataSource.data)
      } else {
        this.dataSource.data = [];
        
      }
    });
    
  }
  Deconnecter() {
    localStorage.clear()
    }

  ActiverFormation(x:any){
    this._service.SetIDF(x)
    const dialogRef = this.dialog.open(ActiveformationComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });}

formatDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });
}


DesactiverFormation(id:any){
  let verif = confirm('voulez vous désactiver formation')
  if (verif){
  let formdata = new FormData()
  formdata.append('id',id)
  this._service.DesactiverFormation(localStorage.getItem('token'),formdata).subscribe((response: any) => {
    if(response.Message){
      this.messagesuccess=response.Message
      setTimeout(() => {
        this.messagesuccess=""
        window.location.reload();
      }, 3500);
}else{
  this.messageerror=response.Message
  setTimeout(() => {
    this.messageerror=""
    }, 3500);
}})}}


/*convertDateStringToDate(dateString: string): string {
  const dateObject = new Date(dateString);
  return this.datePipe.transform(dateObject, 'dd-MM-yyyy') || '';
}*/

}