import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home';
import { Info } from './components/info/info';
import { Causas } from './components/causas/causas';
import { Diagnostico } from './components/diagnostico/diagnostico';
import { Sintomas } from './components/sintomas/sintomas';
import { Sobre } from './components/sobre/sobre';
import { Tratamento } from './components/tratamento/tratamento';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'info', component: Info },
  { path: 'causas', component: Causas },
  { path: 'diagnostico', component: Diagnostico },
  { path: 'sintomas', component: Sintomas },
  { path: 'sobre', component: Sobre },
  { path: 'tratamento', component: Tratamento },
];
