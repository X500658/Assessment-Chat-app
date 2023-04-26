import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BuddiesComponent } from './buddies/buddies.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent , pathMatch: 'full'},
  {path: 'register', component: LoginComponent, pathMatch:'full'},
  {path: 'profile', component: ProfileComponent, pathMatch: 'full'},
  {path: 'buddies', component: BuddiesComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/register', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
