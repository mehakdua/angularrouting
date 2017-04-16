import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
const heroesRoutes: Routes = [
  { path: 'heroes',   component: HeroListComponent },
  { path: 'heroes/:id', component: HeroesDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule {}