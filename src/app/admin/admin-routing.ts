import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { ManageCrisisComponent }    from './manage-crisis.component';
import { ManageHeroesComponent }    from './manage-heroes.component';
const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'crises', component: ManageCrisisComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}