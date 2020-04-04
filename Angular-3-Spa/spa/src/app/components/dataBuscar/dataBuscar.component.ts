import { Component, OnInit, NgModule} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroe.service';


@Component({
  selector: 'app-dataBuscar',
  templateUrl: './dataBuscar.component.html'
})
export class DataBuscarComponent implements OnInit {

    private heroes:Heroe [] = []
    termino:string;

    constructor(private activateRoute : ActivatedRoute,
                private _heroeService : HeroesService){

}
ngOnInit(): void {
    
    this.activateRoute.params.subscribe(params => {
        this.termino=params['termino'];
        this.heroes = this._heroeService.buscarHeroes(params ['termino']);
        console.log(this.heroes);
});
}

    
}
