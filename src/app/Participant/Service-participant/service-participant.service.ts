import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'highcharts';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceParticipantService implements OnInit {
  
  
  currentUrl: string | undefined;
  x: any;
  y: any;
  
  constructor(private http:HttpClient,private router:Router) { }
  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }
  
  InscriptionAuCours(token:any,formdata:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiParticipant/InscriptionAuFormation",formdata,{headers});
  }
  
  RecupererId(token: any) {
    let formdata = new FormData();
    formdata.append('token', token);
    return this.http.post("http://localhost:8080/apiParticipant/RecupererId",formdata);
  }
  
  listerLesFormationAffecterAParticipant(token:any,form:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiParticipant/listerLesFormationAffecterAParticipant",form,{headers});
  }

  getIDF(){
    return this.x;
  }
  SetIDF(id:any){
    this.x=id;
  }
  
  getIDFormateur(){
    return this.y;
  }
  SetIDFormateur(id:any){
    this.y=id;
  }
  insererBonDeCommande(token:any,formdata:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiParticipant/insererBonDeCommande",formdata,{headers});
  }

  downloadAttestation(idformation:any,idparticipant:any) {
    return  this.http.get(`http://localhost:8080/apiParticipant/certification/`+idformation+"/"+idparticipant,{responseType: 'arraybuffer'});
  }

}

