import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormGroup) { }

  form: FormGroup;

  ngOnInit(): void {
  //  this.form = this.formBuilder.group()
  }

  guardarCambios(){
    // ... guardar los cambios
    this.router.navigate(['/generos'])
  }

}
