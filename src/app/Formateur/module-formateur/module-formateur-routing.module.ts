import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesModulesComponent } from '../mes-modules/mes-modules.component';
import { ProgrammeComponent } from '../contenuDeFormation/programme/programme.component';
import { LienEvaluationComponent } from '../contenuDeFormation/lien-evaluation/lien-evaluation.component';

const routes: Routes = [
  {path:"Mes&Modules" , component:MesModulesComponent},
  {path:"Programme" , component:ProgrammeComponent},
  {path:"NouvelleEvaluation" , component:LienEvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleFormateurRoutingModule { }
