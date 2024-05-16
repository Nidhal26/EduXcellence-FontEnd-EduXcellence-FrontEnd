import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesModulesComponent } from '../mes-modules/mes-modules.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  {path:"Mes&Modules" , component:MesModulesComponent},
  {path:"Profile" , component:ProfileComponent},
  {path:"in" , component:MesModulesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleFormateurRoutingModule { }
