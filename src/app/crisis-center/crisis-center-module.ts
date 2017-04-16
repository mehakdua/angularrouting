import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { CrisisService } from './crisis.service';
import {  CrisisListComponent} from './crisis-list.component';
import {  CrisisCenterComponent} from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import {  CrisisDetailComponent} from './crisis-detail.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing';
@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CrisisCenterRoutingModule
  ],
  providers: [CrisisService]
})
export class CrisisModule { }