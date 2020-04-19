import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenaPipe'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, estado: boolean): any {
    
    if (estado){
      let salida: string = "";
      for(let i = 0; i < value.length; i ++){
        salida += "*";
      } 
      return salida;
    }
    else{
      return value;
    }
    
  }

}
