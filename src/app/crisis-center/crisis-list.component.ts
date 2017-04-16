import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CrisisService } from './crisis.service';
@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
private items=[];
  constructor(private cs:CrisisService) {
   this.items = this.cs.getCrisis();
   }

  ngOnInit() {
  }
  onSelect(crisis){
  this.router.navigate([crisis.id], { relativeTo: this.route });
  }


}
