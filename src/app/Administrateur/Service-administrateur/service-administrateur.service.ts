import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdministrateurService {

  x:any
  
  constructor(private http:HttpClient) { }

  //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  CreationUnNoveauFormateur(formdata:any,token:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiAdmin/AjouterFormateur",formdata,{headers});
  }

  ConsulterLesFormateurs(token:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.get("http://localhost:8080/apiAdmin/listerFormateurs",{headers});
  }

  ActiverCompteFormateur(token: any, formdata: any) {
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.put("http://localhost:8080/apiAdmin/ActiverCompteFormateur",formdata,{headers});  
  }

  DesactiverCompteFormateur(token: any, formdata: any) {
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.put("http://localhost:8080/apiAdmin/DesactiverCompteFormateur",formdata,{headers});  
  }
  
ModifierCompteDeFormateur(formdata: FormData,token:any,id:any) {
  const headers = new HttpHeaders().set('token', `${token}`);
  return this.http.put("http://localhost:8080/apiAdmin/modifierCompteFormateur/"+id,formdata,{headers});  
  }

  getIDF(){
    return this.x;
  }
  SetIDF(id:any){
    this.x=id;
  }
  
  ListerUnSeulFormateur(id: any, token: any) {
    const headers = new HttpHeaders().set('token', `${token}`);
    const body = { id: id };
  return this.http.get("http://localhost:8080/apiAdmin/listerUnSeulFormateurs/"+id,{headers}); 
  }  
  
  ConsulterLesFormation(token:any) {
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.get("http://localhost:8080/apiAdmin/listerFormations",{headers});
  }

  DesactiverFormation(token: any, formdata: any) {
    const headers = new HttpHeaders().set('Token', `${token}`);
    return this.http.put("http://localhost:8080/apiAdmin/DesactiverFormation",formdata,{headers});  
  }

  ActiverFormation(token: any, formdata: any) {
    const headers = new HttpHeaders().set('Token', `${token}`);
    return this.http.put("http://localhost:8080/apiAdmin/ActiverFormation",formdata,{headers});  
  }

  CreationUneNouvelleFormation(formdata:any,token:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiAdmin/AjouterFormation",formdata,{headers});
  }

  ListerUnSeulFormation(id: any, token: any) {
    const headers = new HttpHeaders().set('token', `${token}`);
    const body = { id: id };
  return this.http.get("http://localhost:8080/apiAdmin/listerUnSeulFormation/"+id,{headers}); 
  }

  ModifierUneFormation(formdata: FormData,token:any,id:any) {
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.put("http://localhost:8080/apiAdmin/modifierFormation/"+id,formdata,{headers});  
  }

  VerifierCompteParticipant(token: any, formdata: FormData) {
    const headers = new HttpHeaders().set('Token', `${token}`);
    return this.http.put("http://localhost:8080/apiAdmin/verificationCompteParticipant",formdata,{headers});
  }

  ConsulterLesParticipants(token: any) {
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.get("http://localhost:8080/apiAdmin/listerParticipants",{headers});
  }

  ListerUnSeulParticipant(id: any, token: any) {
      const headers = new HttpHeaders().set('token', `${token}`);
      const body = { id: id };
    return this.http.get("http://localhost:8080/apiAdmin/listerUnSeulParticipant/"+id,{headers});
  }

  ModifierCompteDeParticipant(formdata: any, token: any, id: any) {
        const headers = new HttpHeaders().set('token', `${token}`);
      return this.http.put("http://localhost:8080/apiAdmin/modifierCompteParticipant/"+id,formdata,{headers});  
  }

  listerLesPayementsdUnSeulParticipant(formdata: any, token: any) {
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiAdmin/listerLesPayementsdeUnSeulParticipant",formdata,{headers});
  }

  download(fileName: string): Observable<Blob> {
    const body = { fileName: fileName };
    return this.http.get("http://localhost:8080/apiAdmin/download/"+fileName, { responseType: 'blob' });
  }
}
