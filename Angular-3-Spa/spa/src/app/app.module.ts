import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
//Rutas
import { RouteModule } from './app.routes'

//Servicios
import { HeroesService} from './servicios/heroe.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms'; 
import {APP_BASE_HREF} from '@angular/common';
import { HeroeComponent } from './components/heroe/heroe.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouteModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    HeroesService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
