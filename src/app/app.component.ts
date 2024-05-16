import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ServiceAuthentificationService } from './Authentification/Service/service-authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'EduXcellence';
Schema: any;
  token: any;

  constructor(private router: Router, private _service:ServiceAuthentificationService) {
    
    }
  ngOnInit(): void {
    this.token = this._service.RecupererToken() ;
      this.Schema = this.router.url;
      console.log("token",this.token)
      console.log("Schema",this.Schema)
      
  }
  }
  


