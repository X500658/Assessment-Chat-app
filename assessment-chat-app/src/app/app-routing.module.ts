import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponentComponent , pathMatch: 'full'},
  {path: 'regsiter', component: LoginComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
