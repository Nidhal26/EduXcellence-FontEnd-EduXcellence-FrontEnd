import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetaillsDesOffresComponent } from '../les-offres/detaills-des-offres/detaills-des-offres.component';
import { ServiceAdministrateurService } from '../../Administrateur/Service-administrateur/service-administrateur.service';
import { ServiceParticipantService } from '../../Participant/Service-participant/service-participant.service';
import { DatePipe } from '@angular/common'; // Import DatePipe

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [DatePipe] // Add DatePipe to providers
})
export class MainComponent implements OnInit {
  user: any;
  id: any;
  listeFormation: any;
  DD: any;
  DF: any;

  constructor(
    public dialog: MatDialog,
    private _service: ServiceAdministrateurService,
    private _serviceParticipant: ServiceParticipantService,
    private datePipe: DatePipe // Inject DatePipe
  ) {}

  ngOnInit(): void {
    this._service.filtrerFormations(localStorage.getItem('token')).subscribe((response: any) => {
      if (response.TableFormation) {
        this.listeFormation = response.TableFormation;
        this.DD = this.formatDate(response.TableFormation.datedebut);
        this.DF = this.formatDate(response.TableFormation.datefin);
      }
    });

    this._serviceParticipant.RecupererId(localStorage.getItem("token")).subscribe((data: any) => {
      this.id = data.id;
      this.user = data.user;
    });
  }

  openDialog(x: any) {
    this._service.SetIDF(x);
    const dialogRef = this.dialog.open(DetaillsDesOffresComponent, { width: '500px' });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  formatDate(date: string): any {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
