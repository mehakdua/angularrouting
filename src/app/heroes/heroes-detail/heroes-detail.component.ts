import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute,CanDeactivate} from '@angular/router';
import { HeroesService } from '../heroes.service';
@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
id:string;
  constructor(public route:ActivatedRoute,public heroesService:HeroesService) { }
  ngOnInit() {
   		this.route.params.subscribe(params => {
          this.id = params['id']; 
        });
      
  }
}
