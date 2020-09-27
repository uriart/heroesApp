import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

heroes:Heroe[] = [];

  constructor(  private _heroesService:HeroesService,
                private router:Router
              ) {

   }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( nombre:string ){
    this.router.navigate( ['/heroe', nombre] )
  }

}
