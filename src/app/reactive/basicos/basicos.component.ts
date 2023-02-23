import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    'nombre': [null, [Validators.required, Validators.minLength(3)]],
    'precio': [null, [Validators.required, Validators.min(0)]],
    'existencias': [null, [Validators.required, Validators.min(0)]],
  })

  campoEsValido(campo: string) {

    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }


  constructor(private fb: FormBuilder) { };

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX-4800',
      precio: 1800,
      existencias: 12
    })
  }
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
