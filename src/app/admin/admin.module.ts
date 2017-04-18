import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { ManageCrisisComponent }    from './manage-crisis.component';
import { ManageHeroesComponent }    from './manage-heroes.component';
import { AdminRoutingModule }       from './admin-routing';
import {AuthGuard }  from '../auth-guard.service';
import {AuthService }  from '../auth.service';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisisComponent,
    ManageHeroesComponent
  ],
  providers: [AuthGuard,AuthService]
})
export class AdminModule {}