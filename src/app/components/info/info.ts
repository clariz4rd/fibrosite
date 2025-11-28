import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './info.html',
  styleUrls: ['./info.css'],
  imports: [RouterLink],
})
export class Info {}

