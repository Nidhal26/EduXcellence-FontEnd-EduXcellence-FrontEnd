import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../Administrateur/gestion-de-formateurs/modifier-formateur/modifier-formateur.component';

@Component({
  selector: 'app-inscription-au-cours',
  templateUrl: './inscription-au-cours.component.html',
  styleUrl: './inscription-au-cours.component.scss'
})
export class InscriptionAuCoursComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  NPFormControl = new FormControl('',[Validators.required]);
  matcher = new MyErrorStateMatcher();
}
