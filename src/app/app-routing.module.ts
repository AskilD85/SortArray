import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ErrorPageComponent } from './error-page/error-page.component';
import { IpListComponent } from './ip-list/ip-list.component';

const routes: Routes = [
  { path: 'ip-list', component: IpListComponent },
  { path: '', redirectTo: '/ip-list', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
