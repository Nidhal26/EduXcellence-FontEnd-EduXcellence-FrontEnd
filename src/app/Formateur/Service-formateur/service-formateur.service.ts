import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceFormateurService {

  constructor(private http: HttpClient) { }

  // ajouter une évaluation
  ajouterEvaluation(formdata: any) {
    return this.http.post<string>("http://localhost:8080/apiFormateur/ajouterEvaluation",formdata);
  }

  // lister les évaluations
  listerEvaluations(formdata:any) {
    return this.http.get("http://localhost:8080/apiFormateur/listerEvaluations",formdata);
  }
}
