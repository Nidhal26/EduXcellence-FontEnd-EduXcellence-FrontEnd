import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthentificationService {
  IsAuthentifier(arg0: string | null) {
    throw new Error('Method not implemented.');
  }
  url: any;

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

  isAuthentifier(tokan:any){
    let formdata = new FormData()
    formdata.append('token', tokan);
    return this.http.post("http://localhost:8080/ApiAuth/IsAuthentifier",formdata);
  }

  private dataSource = new BehaviorSubject(localStorage.getItem("token"));
  data$ = this.dataSource.asObservable();

  changeData(newData: any) {
    this.dataSource.next(newData);
  }

  setURL(x:any){
    this.url=x
  }
  
  getURL(){
    return this.url
  }
}
