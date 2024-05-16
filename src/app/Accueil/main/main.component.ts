import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetaillsDesOffresComponent } from '../les-offres/detaills-des-offres/detaills-des-offres.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DetaillsDesOffresComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
