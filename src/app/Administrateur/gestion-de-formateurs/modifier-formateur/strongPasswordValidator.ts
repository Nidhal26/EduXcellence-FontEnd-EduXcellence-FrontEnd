import { AbstractControl, ValidatorFn } from '@angular/forms';

export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;

    // Vérifier si le champ est vide
    if (!value) {
      return null; // Le champ est vide, donc la validation est réussie
    }

    // Vérifier si la longueur du mot de passe est au moins de 10 caractères
    if (value.length < 11) {
      return { 'minLength': true }; // Le mot de passe est trop court
    }

    // Vérifier si le mot de passe contient au moins une lettre majuscule
    const upperCaseRegex = /[A-Z]/;
    if (!upperCaseRegex.test(value)) {
      return { 'missingUpperCase': true }; // La lettre majuscule est manquante
    }

    // Vérifier si le mot de passe contient au moins une lettre minuscule
    const lowerCaseRegex = /[a-z]/;
    if (!lowerCaseRegex.test(value)) {
      return { 'missingLowerCase': true }; // La lettre minuscule est manquante
    }

    // Vérifier si le mot de passe contient au moins un chiffre
    const digitRegex = /\d/;
    if (!digitRegex.test(value)) {
      return { 'missingDigit': true }; // Le chiffre est manquant
    }

    // Si toutes les conditions sont remplies, la validation réussit
    return null;
  };
}
