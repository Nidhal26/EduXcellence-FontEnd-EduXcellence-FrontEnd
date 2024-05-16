import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouterModuleComponent } from '../ajouter-module/ajouter-module.component';

@Component({
  selector: 'app-mes-modules',
  templateUrl: './mes-modules.component.html',
  styleUrl: './mes-modules.component.scss'
})
export class MesModulesComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AjouterModuleComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
