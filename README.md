# FormulariosApp

## Diferencia entre Template Form y Reactive Form

- Los formularios basados ​​en plantillas utilizan el “FormsModule”, mientras que los formularios reactivos se basan en “ReactiveFormsModule”.
- Los formularios basados ​​en plantillas son de naturaleza asincrónica, mientras que los formularios reactivos son en su mayoría sincrónicos.
- En un enfoque basado en plantillas, la mayor parte de la lógica se basa en la plantilla, mientras que en el enfoque basado en reactivos, la lógica reside principalmente en el componente .
- Los formularios basados ​​en plantillas utilizan el `FormsModule`, mientras que los formularios reactivos se basan en `ReactiveFormsModule`.
- Los formularios basados ​​en plantillas son de naturaleza asincrónica, mientras que los formularios reactivos son en su mayoría sincrónicos.
- En un enfoque basado en plantillas, la mayor parte de la lógica se basa en la plantilla, mientras que en el enfoque basado en reactivos, la lógica reside principalmente en el componente .

## Para el Form Template

- `(ngSubmit())=“submit()”` : Evento que se ejecuta cuando pulsamos el botón de submit, que todavía no está creado.
- `#forma`: es la referencia por template, donde tendremos la información de si ese formulario es válido o no, que servirá por ejemplo para habilitar el botón submit que usaremos para enviar los datos del formulario validado.
- `ngForm`: Valor que se asignada a la referencia por template para usar esa clase que se encuentra dentro de FormsModule.

### Directivas que usa el FormTemplate

- `#name` = Esto es la variable por template relacionada al campo del formulario correspondiente al nombre de pila. Podemos hacer con un email añadiendo #email y así sucesivamente. Es un valor que tenemos que tener en cuenta para las validaciones, para saber si ese valor es válido o inválido, por lo que procurad poner un nombre acorde a lo que vamos a introducir. En este caso, al trabajar con un nombre, me parece correcto añadir el valor “name”. En el caso del correo electrónico será “email”, en la contraseña “password” y en la repetición de la contraseña “repeatPass” o algo similar.
- `[(ngModel)]` = Donde se asigna el valor de la propiedad de la propiedad que hemos inicializado en el componente. Hemos creado una propiedad de tipo IRegisterForm aplicando lo de la interface donde habían 4 campos, uno de ellos correspondía al nombre y lo reflejamos así: “register.name”. Es fundamental respetar los nombre.
- `name` = Nombre del input. Casualmente es “name” en este caso, pero en el correo será “email”, en la contraseña será “password” y etc.
- `minlength` = Longitud mínima que tenemos que introducir, para que #name en la propiedad invalid sea false. Si ponemos menos de 5 caracteres, name.invalid será true y querrá decir que es erroneo.
- `class-fontrol=“form-control”` = Clase de Bootstrap que se usa para el control del formulario con las validaciones.
- `required` = Para establecer que ese campo es obligatorio
- `[ngClass]=“{‘valid’…}”` = Se determina por condición, si ese campo es válido o no, para que se aplique una clase CSS dinámicamente. Fijaros de la importancia de “name.valid” y “name.invalid”. Lo que corresponde a “name” es lo que hemos definido como variable por template. Si hubiesemos llamado firstName, sería “firstName.valid” independientemente de lo que añadamos en el [(ngModel)] que es lo que coge de la propiedad del componente.


## Formulario Reactivos

- Aquí se añade la propiedad `registerForm: FormGroup`, es es donde tendremos todas las propiedades de todos los campos que van a componer ese formulario como aspectos de si son obligatorios, longitud mínima, tipo de campo,…
- Añadimos una propiedad `submitted` para hacer un control de si se ha pulsado o no el botón de enviar, para gestionar esta información.
- En el constructor inyectamos la clase `FormBuilder`, que será la encargada de construir agrupando un formulario con sus datos por defecto, si son obligatorios, validaciones y otras opciones que vemos a continuación. Una vez construido todo, lo asignamos en `FormGroup` que hemos definido en `registerForm`, para añadirlo en el template de este componente.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
