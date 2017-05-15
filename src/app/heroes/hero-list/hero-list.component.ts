import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  private heroes;
  constructor(private heroservice:HeroesService,public router: Router) { 
  	this.heroes = this.heroservice.getHeroes();
  }
  ngOnInit() {
  }
onSelect(hero) {
    console.log(hero);
    this.router.navigate(['/heroes', hero.id]);
  }
}
