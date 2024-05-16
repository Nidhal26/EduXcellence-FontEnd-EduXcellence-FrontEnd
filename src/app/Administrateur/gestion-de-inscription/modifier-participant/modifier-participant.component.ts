import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../gestion-de-formateurs/modifier-formateur/modifier-formateur.component';
import { strongPasswordValidator } from '../../gestion-de-formateurs/modifier-formateur/strongPasswordValidator';

@Component({
  selector: 'app-modifier-participant',
  templateUrl: './modifier-participant.component.html',
  styleUrl: './modifier-participant.component.scss'
})
export class ModifierParticipantComponent {
  value = 'Clear me';

  hide = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  motdepasseFormControl = new FormControl('',[Validators.required, Validators.minLength(10) ,strongPasswordValidator()]);
  telephoneFormControl = new FormControl('', [Validators.required, strongPasswordValidator(),Validators.minLength(8)]);
  photoFormControl = new FormControl('', [Validators.required, Validators.email]);
  cvFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();


}
