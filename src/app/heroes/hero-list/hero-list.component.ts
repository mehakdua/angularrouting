import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  private heroes;
  constructor(private heroservice:HeroesService) { 
  	this.heroes = this.heroservice.getHeroes();
  }
  ngOnInit() {
  }

}
