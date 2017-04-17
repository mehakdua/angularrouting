import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
const appRoutes: Routes = [
  { path: '',   redirectTo: '/heroes/1', pathMatch: 'full' },
  {path: 'compose',component: ComposeMessageComponent,outlet: 'popup'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}