import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../gestion-de-formateurs/modifier-formateur/modifier-formateur.component';
import { strongPasswordValidator } from '../../gestion-de-formateurs/modifier-formateur/strongPasswordValidator';

@Component({
  selector: 'app-ajouter-une-formation',
  templateUrl: './ajouter-une-formation.component.html',
  styleUrl: './ajouter-une-formation.component.css'
})
export class AjouterUneFormationComponent {

  hide = true;

  
  inputFormControl1 = new FormControl('', [Validators.required]);
  inputFormControl2 = new FormControl('', [Validators.required]);
  inputFormControl3 = new FormControl('', [Validators.required]);
  inputFormControl4 = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
}
