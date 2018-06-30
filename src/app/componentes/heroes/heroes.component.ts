import { Component, OnInit } from '@angular/core';
import { Hero } from '../../modelos/hero.model';
import { HEROES } from '../../mock/heroes.mock';
import { HeroService } from '../../servicios/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];

  selectedHero: Hero  = {} as Hero;

  constructor(
    private _hs: HeroService
  ) { 
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(heroe: Hero): void {
    this.selectedHero = heroe;
  }

  getHeroes(): void {
    this._hs.getHeroes().subscribe(heroes => {
      this.heroes = heroes
    });
  }

}
