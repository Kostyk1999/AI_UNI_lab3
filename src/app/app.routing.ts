import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from './info/info.component';
import {Lab3Component} from './lab3/lab3.component';
import {ResultsComponent} from './results/results.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'lab3', pathMatch: 'full'},
  {path: 'info', component: InfoComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'lab3', component: Lab3Component},

  // otherwise redirect to home
  {path: '**', redirectTo: 'lab3'},
];

export const routing = RouterModule.forRoot(appRoutes);
