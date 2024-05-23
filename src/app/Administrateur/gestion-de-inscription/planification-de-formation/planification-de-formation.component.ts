import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-planification-de-formation',
  templateUrl: './planification-de-formation.component.html',
  styleUrls: ['./planification-de-formation.component.scss']
})
export class PlanificationDeFormationComponent {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  Formationid: string | null = null;
  Formateurid: string | null = null;

  trackFood(index: number, food: Food): string {
    return food.value;
  }
}