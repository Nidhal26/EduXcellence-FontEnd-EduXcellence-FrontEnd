import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthentificationService {

  constructor(private http: HttpClient) { }

  Connection (formdata:any){
    return this.http.post<String>("http://localhost:8080/ApiAuth/loginParticipant",formdata);
  }

  InscriptionParticipant (formdata:any){
    return this.http.post<String>("http://localhost:8080/ApiAuth/inscriptionParticipant",formdata);
  }

  ConnectionAdmin(formdata:any){
    return this.http.post<String>("http://localhost:8080/ApiAuth/loginAdmin",formdata);
  }

  ConnectionFormateur (formdata:any){
    return this.http.post<String>("http://localhost:8080/ApiAuth/loginFormateur",formdata);
  }

  RecupererToken(){
    if(localStorage.getItem("token")){
      return "";
    }else{
      return localStorage.getItem("token");
    }
  }

  private dataSource = new BehaviorSubject(localStorage.getItem("token"));
  data$ = this.dataSource.asObservable();

  changeData(newData: any) {
    this.dataSource.next(newData);
  }
  
}
