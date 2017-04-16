import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app.routing';
import { AppComponent } from './app.component';
import {HeroesModule} from './heroes/heroes.module';
import {CrisisModule} from './crisis-center/crisis-center-module';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HeroesModule,
    CrisisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
