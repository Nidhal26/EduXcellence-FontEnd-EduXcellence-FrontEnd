import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ServiceAdministrateurService } from '../Service-administrateur/service-administrateur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    this.NombreDeParticipants()
    this.NombreDeFormateurs()
    this.NombreParticipantsVerifies()
    this.NombreParticipantsNonVerifies()
  }

  constructor(private _service: ServiceAdministrateurService) { }
  Deconnecter() {
    localStorage.clear()
  }

  HighchartL: typeof Highcharts = Highcharts;
  chartOptionsL: Highcharts.Options = {
    credits: { enabled: false },
    legend: {
      enabled: false
    },
    title: {
      text: 'Egg Yolk Composition'
    },
    tooltip: {
      valueSuffix: '%'
    },
    series: [{
      data: [0, 2, 4, 3, 0.5, 7, 3],
      type: 'line',
      name: 'name',
      className: "className"

    }]
  };

  HighchartC: typeof Highcharts = Highcharts;
  chartOptionsC: Highcharts.Options = {
    credits: { enabled: false },
    title: {
      text: 'Egg Yolk Composition'
    },
    tooltip: {
      valueSuffix: '%'
    },
    series: [{
      name: 'Percentage',
      data: [
        {
          name: 'Water',
          y: 55.02
        },
        {
          name: 'Fat',
          sliced: true,
          selected: false,
          y: 26.71
        },
        {
          name: 'Carbohydrates',
          y: 1.09
        },
        {
          name: 'Protein',
          y: 15.5
        },
        {
          name: 'Ash',
          y: 1.68
        }
      ],
      type: 'pie',
    }]
  };


  nbrParticipants: any
  NombreDeParticipants() {
    this._service.NombreDeParticipants(localStorage.getItem("token")).subscribe((data: any) => {
      if (data.Message == "Accés refusé") {
      }
      else { this.nbrParticipants = data.NombreDeParticipants }

    })
  }



  nbrFormateurs: any
  NombreDeFormateurs() {
    this._service.NombreDeFormateurs(localStorage.getItem("token")).subscribe((data: any) => {
      if (data.Message == "Accès refusé") {
      }
      else { this.nbrFormateurs = data.NombreDeFormateurs }

    })
  }

  nbrParticipantsVerifies: any
  NombreParticipantsVerifies() {
    this._service.NombreParticipantsVerifies(localStorage.getItem("token")).subscribe((data: any) => {
      if (data.Message == "Accès refusé") {
      }else { this.nbrParticipantsVerifies = data.ParticipantVerifier }
    })
  }

  nbrParticipantsNonVerifies: any
  NombreParticipantsNonVerifies() {
    this._service.NombreParticipantsNonVerifies(localStorage.getItem("token")).subscribe((data: any) => {
      if (data.Message == "Accès refusé") {
      }else { this.nbrParticipantsNonVerifies = data.ParticipantNonVerifier }
    })
  }

}

