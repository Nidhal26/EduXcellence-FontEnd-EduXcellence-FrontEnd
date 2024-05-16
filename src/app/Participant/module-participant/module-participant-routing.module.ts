import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { InscriptionAuCoursComponent } from '../inscription-au-cours/inscription-au-cours.component';

const routes: Routes = [
  {path : "Profile" , component : ProfileComponent},
  {path : "Inscription&au&cours" , component : InscriptionAuCoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleParticipantRoutingModule { }
