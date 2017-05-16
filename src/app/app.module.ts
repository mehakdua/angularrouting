import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app.routing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import {HeroesModule} from './heroes/heroes.module';
import {CrisisModule} from './crisis-center/crisis-center-module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import { AdminModule } from './admin/admin.module';
import { LoginModule }      from './login/login.routing';
import { LoginComponent } from './login/login.component';
import { CanDeactivateGuard }    from './deactivate-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    CrisisModule,
    AdminModule,
    LoginModule,
    AppRoutingModule

  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
 constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
