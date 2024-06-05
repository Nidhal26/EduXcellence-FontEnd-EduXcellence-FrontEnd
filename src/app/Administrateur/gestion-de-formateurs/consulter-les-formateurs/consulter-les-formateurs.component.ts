import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AjouterUnFormateurComponent } from '../ajouter-un-formateur/ajouter-un-formateur.component';
import { ModifierFormateurComponent } from '../modifier-formateur/modifier-formateur.component';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';
import { MesformationsComponent } from '../../gestion-de-formation/mesformations/mesformations.component';

export interface UserData {
  id:any
  nomPrenom: string;
  numTelephone:any
  email:any
  active:any
  specialite:any
  formationId:any
  Disponiblite:any
}

@Component({
  selector: 'app-consulter-les-formateurs',
  templateUrl: './consulter-les-formateurs.component.html',
  styleUrls: ['./consulter-les-formateurs.component.css']
})
export class ConsulterLesFormateursComponent implements AfterViewInit {

  
  displayedColumns: string[] = ['email', 'nomPrenom', 'numTelephone','Specialité','OptionDeCompte'];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
messagesuccess: any;
messageerror: any;

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
    const dialogRef = this.dialog.open(AjouterUnFormateurComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(x:any) {
    this._service.SetIDF(x)
    const dialogRef = this.dialog.open(ModifierFormateurComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  loadFormateurs() {
    this._service.ConsulterLesFormateurs(localStorage.getItem('token')).subscribe((response: any) => {
      if (response.TableFormateur) {
        this.dataSource.data = response.TableFormateur.map((formateur: any) => ({
          id: formateur.id,
          email: formateur.email.toString(),
          nomPrenom: formateur.nomPrenom,
          numTelephone:formateur.numTelephone,
          active:formateur.active,
          specialite:formateur.specialite,
          formationId:formateur.formationID,
          Disponiblite:formateur.disponiblite
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
    
  ActiverCompteFormateur(id:any){
    let formdata = new FormData();
    formdata.append("id",id)
    this._service.ActiverCompteFormateur(localStorage.getItem('token'),formdata).subscribe((response: any) => {
      if(response.Message=="Le compte a été activé"){
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
  }
})}

Reassignation(x:any){
  let formdata = new FormData();
  formdata.append("id",x)
  this._service.Reassignation(localStorage.getItem("token"),formdata).subscribe((data:any)=>{
    window.location.reload()
  })
}

DesactiverCompteFormateur(id:any){
  let formdata = new FormData();
  formdata.append("id",id)
  this._service.DesactiverCompteFormateur(localStorage.getItem('token'),formdata).subscribe((response: any) => {
    if(response.Message=="Le compte a été désactivé"){
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
}})}

}
