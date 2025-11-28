import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [RouterLink],
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {

    const togglebtn = document.querySelector('.togglebtn') as HTMLElement;
    const nav = document.querySelector('.navlinks') as HTMLElement;

    togglebtn?.addEventListener('click', () => {
      togglebtn.classList.toggle('click');
      nav.classList.toggle('open');
    });

    new Typed('.input', {
      strings: [
        'ninguém está sozinho',
        'você é forte',
        'juntos somos mais'
      ],
      typeSpeed: 70,
      backSpeed: 55,
      loop: true
    });

  }
}
