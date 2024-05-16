import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdministrateurService {

  constructor(private http: HttpClient) { }

  // ajouter un formateur
  ajouterFormateur(formdata : any){
    return this.http.post<string>("http://localhost:8080/apiAdmin/ajouterFormateur",formdata);
  }

  // lister les formateurs
  listerFormateurs(formdata:any){
    return this.http.get("http://localhost:8080/apiAdmin/listerFormateurs",formdata);
  }

  // ajouter les formations
  ajouterFormation(formdata : any){
    return this.http.post<string>("http://localhost:8080/apiAdmin/NouvelleFormation",formdata);
  }

  // lister les formations
  listerFormations(formdata:any){
    return this.http.get("http://localhost:8080/apiAdmin/listerFormations",formdata)
  }

  // vérification des comptes
  verifierComptesParticipants(formdata:any){
    return this.http.put("http://localhost:8080/apiAdmin/verificationCompte",formdata);
  }

  // activer les comptes des formateurs
  activerCompteFormateur(formdata:any){
    return this.http.put("http://localhost:8080/apiAdmin/ActiverCompteFormateur",formdata)
  } 

  // désactiver un compte formateur
  desactiverCompteFormateur(formdata:any){
    return this.http.put("http://localhost:8080/apiAdmin/DesactiverCompteFormateur",formdata)
  }

  // modifier un compte formateur
  modifierCompteFormateur(formdata:any){
    return this.http.put("http://localhost:8080/apiAdmin/modifierCompteFormateur",formdata);
  }

  // modifier un compte participant
  modifierCompteParticipant(formdata:any){
    return this.http.put("http://localhost:8080/apiAdmin/modifierCompteParticipant",formdata);
  }
}
