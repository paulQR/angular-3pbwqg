import{Component} from '@angular/core';
import{ FormGroup, FormControl, Validators, FormArray} from '@angular/forms'
import{ Observable } from 'rxjs/Rx'

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
                'apellido': new FormControl('', [
                                                  Validators.required,
                                                  this.noHerrera
                                                ] )
            }),
            'correo': new FormControl('',   [
                              Validators.required, 
                              Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")] ),
            'pasatiempos': new FormArray([
                new FormControl('Correr', Validators.required)
            ]),
            'username' : new FormControl('', Validators.required),
            'password1' : new FormControl('', Validators.required),
            'password2' : new FormControl()
           });

            // pasa valores por defecto
            //this.forma.setValue(this.usuario);

            this.forma.controls['password2'].setValidators([
                Validators.required,
                this.noIgual.bind(this.forma)
            ])
    }

    agregarPasatiempo(){
        (<FormArray>this.forma.controls['pasatiempos']).push(
           //new FormControl('Dormir', Validators.required )
           new FormControl('', Validators.required )
        )
    }

    noHerrera( control: FormControl):{[s:string]: boolean}{

          // si la validacion esta fallando
          if(control.value === "herrera"){
              return{
                 noherrera: true
              }
          }

          // si esta bien
          return null;
    }

    /*
    noIgual( control: FormControl):{[s:string]: boolean}{
          if(control.value !== this.forma.controls['password1'].value){
              return{
                 noiguales: true
              }
          }
          return null;
    }
    */

    noIgual( control: FormControl):any{
          //console.log(this);
          let forma:any = this;
          if(control.value !== forma.controls['password1'].value){
              return{
                 noiguales: true
              }
          }
          return null;
          
    }

    existeUsuario( control: FormControl): Promise<any>|Observable<any>{

    }    

    guardarCambios(){
      console.log(this.forma.value);
      console.log(this.forma);

      //this.forma.reset(this.usuario);
      /*
      this.forma.reset({
          nombrecompleto: {
            nombre:"",
            apellido: ""
          },
          correo:""
      });
      */

      //this.forma.controls['correo'].setValue('Nuevo correo@asdasd.com');
    }

}