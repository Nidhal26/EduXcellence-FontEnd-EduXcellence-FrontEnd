import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    
  }

 HighchartL: typeof Highcharts = Highcharts;
  chartOptionsL: Highcharts.Options = {
    credits : { enabled : false },
    legend : {
      enabled : false
    },
    title: {
      text: 'Egg Yolk Composition'
  },
  tooltip: {
      valueSuffix: '%'
  },
    series: [{
      data: [0, 2,4,3,0.5,7, 3],
      type: 'line',
      name : 'name',
      className : "className"
      
    }]
  };

  HighchartC: typeof Highcharts = Highcharts;
  chartOptionsC: Highcharts.Options = {
    credits : { enabled : false },
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

}

