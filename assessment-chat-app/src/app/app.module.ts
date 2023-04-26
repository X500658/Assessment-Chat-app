import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatlsitComponent } from './chatlsit/chatlsit.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BuddiesComponent } from './buddies/buddies.component';
import { FormComponent } from './form/form.component';
import { UserService } from './service/users.service';
import { RoonmlistComponent } from './roonmlist/roonmlist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChatlsitComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    BuddiesComponent,
    FormComponent,
    RoonmlistComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
