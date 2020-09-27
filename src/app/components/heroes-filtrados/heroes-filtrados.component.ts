import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-filtrados',
  templateUrl: './heroes-filtrados.component.html'
})
export class HeroesFiltradosComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(  private activatedRoute: ActivatedRoute,
                private _heroesService:HeroesService,
                private router:Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
    });

  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe', idx] )
  }

}
