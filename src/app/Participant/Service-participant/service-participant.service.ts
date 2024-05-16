import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceParticipantService {

  constructor(private http: HttpClient) { }

  // s'inscrire au cours
  inscriptionAuCours(formdata:any){
    return this.http.post<string>("http://localhost:8080/apiParticipant/Inscription",formdata);
  }
}
