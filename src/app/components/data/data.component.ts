import{Component} from '@angular/core';
import{ FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html', 
})
export class DataComponent {

    forma: FormGroup;

    usuario: Object = {

      nombrecompleto: {
            nombre: "fernando",
            apellido: "herrera"
      },
      correo: "fernando.herrera85@gmail.com"
    }

    constructor(){

          console.log(this.usuario);
          /*
          this.forma = new FormGroup({

            'nombrecompleto': new FormGroup({
                'nombre': new FormControl( this.usuario.nombrecompleto.nombre, [ 
                                              Validators.required,
                                              Validators.minLength(3) ]),
                'apellido': new FormControl(this.usuario.nombrecompleto.apellido, Validators.required )
            }),
            'correo': new FormControl(this.usuario.correo,   [
                              Validators.required, 
                              Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")] )
           });
           */
          this.forma = new FormGroup({

            'nombrecompleto': new FormGroup({
                'nombre': new FormControl( '', [ 
                                              Validators.required,
                                              Validators.minLength(3) ]),
                'apellido': new FormControl('', Validators.required )
            }),
            'correo': new FormControl('',   [
                              Validators.required, 
                              Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")] )
           });

            this.forma.setValue(this.usuario);
    }

    guardarCambios(){
      console.log(this.forma.value);
      console.log(this.forma);
    }

}