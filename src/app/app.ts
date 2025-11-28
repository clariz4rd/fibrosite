import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home';
import { Info } from './components/info/info';
import { Causas } from './components/causas/causas';
import { Diagnostico } from './components/diagnostico/diagnostico';
import { Sintomas } from './components/sintomas/sintomas';
import { Sobre } from './components/sobre/sobre';
import { Tratamento } from './components/tratamento/tratamento';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class App {}
