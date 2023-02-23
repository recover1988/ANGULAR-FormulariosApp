import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  miFormulario: FormGroup = this.fb.group({
    'nombre': ['RTX 4800ti'],
    'precio': [1555],
    'existencias': [12],
  })




  constructor(private fb: FormBuilder) { };
}

/*
  miFormulario: FormGroup = this.fb.group({
    'nombre': ['RTX 4800ti', |VALIDACIONES|, |VALIDACIONES_ASINCRONAS|],
    'precio': [1555],
    'existencias': [12],
  })
*/


/*
  miFormulario: FormGroup = new FormGroup({
    'nombre': new FormControl('RTX 4800ti'),
    'precio': new FormControl(1550),
    'existencias': new FormControl(12),
  })
*/

/*
miFormulario:FormGroup= new FormGroup({
  'nombre'      : new FormControl('RTX 4800ti'),
  'precio'      : new FormControl(1550),
  'existencias' : new FormControl(12),
  'existencias' : new FormControl(12),
  'existencias' : new FormControl(12),
  'existencias' : new FormArray([
    new FormControl(12),
    new FormControl(12),
    new FormControl(12),
    new FormControl(12),
  ]),
})
*/
