import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ServiceFormateurService } from '../../Service-formateur/service-formateur.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-lien-evaluation',
  templateUrl: './lien-evaluation.component.html',
  styleUrls: ['./lien-evaluation.component.scss']
})

export class LienEvaluationComponent {
  messagesuccess: any;
  lienEvaluation: any;
  messagealert: any;
  messageerror: any;

inputFormControl3 = new FormControl();
matcher = new MyErrorStateMatcher();
dateEvaluation: any;

constructor(private _service:ServiceFormateurService){}
  AjouterUneNouvelleEvaluation() {
    if (!this.lienEvaluation) {
      this.messagealert = "Veuillez remplir le champ de lien d'évaluation";
      setTimeout(() => {
        this.messagealert = null;
      }, 2500);
      return;
    }
    if(!this.dateEvaluation) {
      this.messagealert = "Veuillez remplir le champ Date d'évaluation";
      setTimeout(() => {
        this.messagealert = null;
      }, 2500);
      return;
    }
    let formdata = new FormData()
    formdata.append('lien', this.lienEvaluation)
    formdata.append('dateEval', this.dateEvaluation)
    formdata.append('FormationID',this._service.getX())
    this._service.ajouterEvaluation(localStorage.getItem("token"),formdata).subscribe((data:any)=>{
      this.messagesuccess = "Lien d'évaluation ajouté avec succès";
    })
    setTimeout(()=>{
      this.messagesuccess=""
      window.location.reload()
    },2500)
  }
}