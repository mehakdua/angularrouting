import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { CanDeactivateGuard }    from '../deactivate-guard.service';
const heroesRoutes: Routes = [
  { path: 'heroes',   component: HeroListComponent },
  { path: 'heroes/:id', component: HeroesDetailComponent,
            canDeactivate: [CanDeactivateGuard]}
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