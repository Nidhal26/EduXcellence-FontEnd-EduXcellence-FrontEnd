import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ServiceAuthentificationService } from './Authentification/Service/service-authentification.service';
import { ServiceParticipantService } from './Participant/Service-participant/service-participant.service';
import {  NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'EduXcellence';
  isAuthentifier: any;
  token: any;
  id: any;
  user: any;
  currentUrl: any;
  
  constructor(private router: Router, private _service:ServiceAuthentificationService,private _serviceParticipant:ServiceParticipantService ) {
    }
  ngOnInit(): void {

      this._service.isAuthentifier(localStorage.getItem("token")).subscribe((data:any)=>{
        this.isAuthentifier=data;
        if (data==false){
          this.isAuthentifier=true
          this.router.navigate(['/']);
        }
      })

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.urlAfterRedirects;
      console.log('Current URL:', this.currentUrl);
    });
  
    
    this.token = localStorage.getItem('token')
      this._serviceParticipant.RecupererId(localStorage.getItem("token")).subscribe((data:any)=>{
        this.id=data.id
        this.user=data.user
      })
     
  }
  }
  


