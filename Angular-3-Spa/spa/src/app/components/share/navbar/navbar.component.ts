import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from 'src/app/servicios/heroe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'

})
export class NavbarComponent implements OnInit {
  

  constructor(private _heroesService:HeroesService,
              private router:Router) { }
  
  ngOnInit(): void {
  }


  buscarHeroe(termino:String){
    this.router.navigate(['/buscar',termino]);
  }

  
  

}
