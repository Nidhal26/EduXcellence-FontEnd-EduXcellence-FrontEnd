import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { strongPasswordValidator } from './strongPasswordValidator';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-modifier-formateur',
  templateUrl: './modifier-formateur.component.html',
  styleUrl: './modifier-formateur.component.scss'
})
export class ModifierFormateurComponent {

  hide = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  motdepasseFormControl = new FormControl('',[Validators.required, Validators.minLength(10) ,strongPasswordValidator()]);
  telephoneFormControl = new FormControl('', [Validators.required, strongPasswordValidator(),Validators.minLength(8)]);
  photoFormControl = new FormControl('', [Validators.required, Validators.email]);
  cvFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  matcher = new MyErrorStateMatcher();


 
}

