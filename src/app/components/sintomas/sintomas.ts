import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './sintomas.html',
  styleUrls: ['./sintomas.css'],
  imports: [RouterLink],
})
export class Sintomas {

}
