import { Interpolation } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-pelicula',
  templateUrl: './listado-pelicula.component.html',
  styleUrls: ['./listado-pelicula.component.css']
})
export class ListadoPeliculaComponent implements OnInit {

  constructor() { }
  @Input()
  peliculas;

  ngOnInit(): void {
    
  }

  remover(indicePelicula: number): void{
    this.peliculas.splice(indicePelicula,1);
  }

}
