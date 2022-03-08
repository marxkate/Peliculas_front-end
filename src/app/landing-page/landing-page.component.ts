import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
      this.peliculasEnCines = [{
        titulo: 'Spider-man',
        estreno: new Date(),
        precio: 1400.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BZWJmZTE3M2QtM2NiOS00ODhkLWEzY2MtNGQ1MjY4YzlmOTNjXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_QL75_UX380_CR0,0,380,562_.jpg'
      },
      {
        titulo: 'Moana',
        estreno: new Date(),
        precio: 1400.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_QL75_UX380_CR0,35,380,562_.jpg'
      }]
  }
  peliculasEnCines;
  peliculasProximosEstrenos = [];

}
