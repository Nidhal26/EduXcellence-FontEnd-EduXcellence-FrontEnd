import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrl: './deconnexion.component.scss'
})
export class DeconnexionComponent {
  constructor(public dialogRef: MatDialogRef<DeconnexionComponent>, private router:Router) {}

  SeDeconnecter(){
    localStorage.clear()
      window.location.reload()
    this.router.navigate(["/"])
    }
    }

