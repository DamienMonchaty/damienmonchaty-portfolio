import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Stage1Component } from './components/stages/stage1/stage1.component';
import { Stage2Component } from './components/stages/stage2/stage2.component';
import { Ppe1Component } from './components/ppes/ppe1/ppe1.component';
import { Ppe2Component } from './components/ppes/ppe2/ppe2.component';
import { VeilleComponent } from './components/veille/veille.component';
import { ContactComponent } from './components/contact/contact.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { ProjetsComponent } from './components/projets/projets.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stage1', component: Stage1Component },
  { path: 'stage2', component: Stage2Component },
  { path: 'spe1', component: Ppe1Component },
  { path: 'spe2', component: Ppe2Component },
  { path: 'projets', component: ProjetsComponent },
  { path: 'veille', component: VeilleComponent },
  { path: 'tableau', component: TableauComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
