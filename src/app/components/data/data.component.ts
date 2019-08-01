import{Component} from '@angular/core';
import{ FormGroup, FormControl, Validators, FormArray} from '@angular/forms'
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
     // pasatiempos: ["Correr", "Dormir", "Comer"]
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
                              Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")] ),
            'pasatiempos': new FormArray([
                new FormControl('Correr', Validators.required)
            ])
           });

            // pasa valores por defecto
            //this.forma.setValue(this.usuario);
    }

    agregarPasatiempo(){
        (<FormArray>this.forma.controls['pasatiempos']).push(
            new FormControl('Dormir', Validators.required )
        )
    }

    guardarCambios(){
      console.log(this.forma.value);
      console.log(this.forma);

      //this.forma.reset(this.usuario);
      this.forma.reset({
          nombrecompleto: {
            nombre:"",
            apellido: ""
          },
          correo:""
      });

      //this.forma.controls['correo'].setValue('Nuevo correo@asdasd.com');
    }

}