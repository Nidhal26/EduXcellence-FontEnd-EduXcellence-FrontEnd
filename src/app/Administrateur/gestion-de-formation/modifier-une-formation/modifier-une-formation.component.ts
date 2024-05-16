import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../gestion-de-formateurs/modifier-formateur/modifier-formateur.component';

@Component({
  selector: 'app-modifier-une-formation',
  templateUrl: './modifier-une-formation.component.html',
  styleUrl: './modifier-une-formation.component.css'
})
export class ModifierUneFormationComponent {

  
  hide = true;

  
  inputFormControl1 = new FormControl('', [Validators.required]);
  inputFormControl2 = new FormControl('', [Validators.required]);
  inputFormControl3 = new FormControl('', [Validators.required]);
  inputFormControl4 = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

}
