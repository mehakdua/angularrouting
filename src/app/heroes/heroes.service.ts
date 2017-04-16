import { Injectable } from '@angular/core';

export class Hero {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class HeroesService {
  private heroes:Hero[]= [
	  new Hero(11, 'Mr. Nice'),
	  new Hero(12, 'Narco'),
	  new Hero(13, 'Bombasto'),
	  new Hero(14, 'Celeritas'),
	  new Hero(15, 'Magneta'),
	  new Hero(16, 'RubberMan')
   ];
  constructor() { 
  
  }
  getHeroes(){
  return this.heroes;
  }
  getHero(id: number | string) {
    return heroes => heroes.find(hero => hero.id === +id);
  }
}

