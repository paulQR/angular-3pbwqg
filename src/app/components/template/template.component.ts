import{Component} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html', 
})
export class TemplateComponent {

    constructor(){}

    guardar(forma:any){
       console.log("Formulario posteado");
       console.log(forma);
    }

}