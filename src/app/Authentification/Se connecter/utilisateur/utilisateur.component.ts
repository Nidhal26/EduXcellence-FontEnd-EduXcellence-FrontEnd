import { Component } from '@angular/core';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent  {

  constructor(private _service:ServiceAuthentificationService,private router:Router){
  }

}
