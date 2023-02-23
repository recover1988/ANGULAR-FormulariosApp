import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {


  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX-1233',
    precio: 10,
    existencias: 12

  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto'].touched;
  };
  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio'].value < 0;
  };

  // guardar(miFormulario: NgForm) {
  guardar() {
    console.log(this.miFormulario.value, 'asd')
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  };
}
