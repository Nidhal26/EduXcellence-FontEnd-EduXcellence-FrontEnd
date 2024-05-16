import { Component } from '@angular/core';
import { ModifierProfileComponent } from './modifier-profile/modifier-profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(ModifierProfileComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}



