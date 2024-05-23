import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceParticipantService {
  
  constructor(private http:HttpClient) { }
  
  InscriptionAuCours(formdata:any,token:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiAdmin/InscriptionAuFormation",formdata,{headers});
  }
}
