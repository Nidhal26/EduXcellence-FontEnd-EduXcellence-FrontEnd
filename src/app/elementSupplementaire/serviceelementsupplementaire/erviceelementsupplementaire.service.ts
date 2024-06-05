import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErviceelementsupplementaireService {

  constructor(private http:HttpClient) { }

  contactAdmin(formdata:any){
    return this.http.post('http://localhost:8080/apiParticipant/envoyerEmailAdmin',formdata)
  }
}
