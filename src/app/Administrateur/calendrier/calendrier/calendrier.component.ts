import { Component } from '@angular/core';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrl: './calendrier.component.scss'
})
export class CalendrierComponent {
Deconnecter() {
localStorage.clear()
}
  selected: Date | null | undefined;
  date: Date[] | undefined;
}
