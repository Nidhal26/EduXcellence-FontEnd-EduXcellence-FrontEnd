import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../gestion-de-formateurs/modifier-formateur/modifier-formateur.component';
import { strongPasswordValidator } from '../../gestion-de-formateurs/modifier-formateur/strongPasswordValidator';

@Component({
  selector: 'app-gestion-de-payement',
  templateUrl: './gestion-de-payement.component.html',
  styleUrl: './gestion-de-payement.component.scss'
})
export class GestionDePayementComponent {

  panelOpenState = false;
  hide = true;

  inputFormControl1 = new FormControl('',[Validators.required,strongPasswordValidator()]);

  matcher = new MyErrorStateMatcher();
}
