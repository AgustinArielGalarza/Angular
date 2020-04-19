import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  
    nombre = "Agustín";
    nombre2= "agusTin aRiel galarZZa"

    arreglo = [1,2,3,4,5,6,7,8,9,10];

    PI = Math.PI;

    a = 0.234;

    salario = 1234.5

    heroe={
      nombre: "Logan",
      clave: "Wolverine",
      direccion:{
        calle:"Primera",
        casa:"Casa X"
      }
    };

    valorDePromesa = new Promise((resolve, rejects)=>{
      setTimeout(()=>resolve('Llego la data!'),3500);
    })

    fecha = new Date();
    
    activar:boolean = false;

    video = "Srw_SG840O8";

}
