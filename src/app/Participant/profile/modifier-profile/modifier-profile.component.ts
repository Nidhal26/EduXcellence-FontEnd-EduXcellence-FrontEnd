import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { strongPasswordValidator } from '../../../Administrateur/gestion-de-formateurs/modifier-formateur/strongPasswordValidator';
import { MyErrorStateMatcher } from '../../../Administrateur/gestion-de-formateurs/modifier-formateur/modifier-formateur.component';

@Component({
  selector: 'app-modifier-profile',
  templateUrl: './modifier-profile.component.html',
  styleUrl: './modifier-profile.component.scss'
})
export class ModifierProfileComponent {

  hide = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  motdepasseFormControl = new FormControl('',[Validators.required, Validators.minLength(10) ,strongPasswordValidator()]);
  telephoneFormControl = new FormControl('', [Validators.required, strongPasswordValidator(),Validators.minLength(8)]);
  photoFormControl = new FormControl('', [Validators.required, Validators.email]);
  cvFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  
}
