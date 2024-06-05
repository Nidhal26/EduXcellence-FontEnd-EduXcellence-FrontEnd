import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../Administrateur/gestion-de-formateurs/modifier-formateur/modifier-formateur.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceParticipantService } from '../Service-participant/service-participant.service';
import { ServiceAdministrateurService } from '../../Administrateur/Service-administrateur/service-administrateur.service';

@Component({
  selector: 'app-inscription-au-cours',
  templateUrl: './inscription-au-cours.component.html',
  styleUrl: './inscription-au-cours.component.scss'
})
export class InscriptionAuCoursComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  NPFormControl = new FormControl('',[Validators.required]);
  matcher = new MyErrorStateMatcher();

  formationId: any;
  id: any;
  user: any;
  formation: any;
  prix: any;
  themedeformation: any;
messagesuccess: any;
messageerror: any;
  file: any;

  constructor(private route: ActivatedRoute,private _serviceParticipant:ServiceParticipantService,private _serviceAdministrateur:ServiceAdministrateurService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
    this.route.paramMap.subscribe(params => {
      this.formationId = params.get('idformation');
    });

    this._serviceParticipant.RecupererId(localStorage.getItem("token")).subscribe((data:any)=>{
      this.id=data.id
      this.user=data.user
    })

    this._serviceAdministrateur.ListerUnSeulFormation(this.formationId,localStorage.getItem("token")).subscribe((data:any)=>{
      this.prix=data.Formation.prix
      this.themedeformation=data.Formation.themeFormation
    })
  }else{
    this.router.navigate(['/Authentification/Connexion/Participant'])
  }
  }
  
  selectedFileName: string = '';

 
  onFileSelected(event: any) {
     this.file = event.target.files[0];
     this.selectedFileName = this.file.name;
  }

  insererBonDeCommande(){
    console.log(this.id)
    const formData = new FormData();
    formData.append('bonDeCommande',  this.file);
    formData.append('ParticipantID', this.id);
    formData.append('FormationID', this.formationId);
    this._serviceParticipant.insererBonDeCommande(localStorage.getItem('token'),formData).subscribe((data:any)=>{
      if (data.Message=="Votre bon de commande a été inséré"){
        this.messagesuccess=data.Message
        setTimeout(() => {
          this.messagesuccess=""
        }, 2500);
      }else if(data.Message=="Votre inscription n'est pas encore validé"){
        this.messageerror=data.Message
        setTimeout(() => {
          this.messageerror=""
        }, 2500);
      }else{
        this.messageerror=data.Message
        setTimeout(() => {
          this.messageerror=""
        }, 2500);
      }
    })
  }

}
