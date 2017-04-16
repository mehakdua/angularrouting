import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HeroesService } from './heroes.service';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesRoutingModule } from './heroes-routing';
@NgModule({
  declarations: [
    HeroListComponent,
    HeroesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesRoutingModule
  ],
  providers: [HeroesService]
})
export class HeroesModule { }