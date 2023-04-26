import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
  ){}

  onSubmitLogin({name, password}: {name: string, password: string}): void{
    this.authService.login(name, password)
      .subscribe(() => {
        this.router.navigateByUrl('/home')
      })
  }
  
  onSubmitSignup({name, password}: {name: string, password: string}): void{
    this.authService.signup(name, password)
      .subscribe(() => {
        this.router.navigateByUrl('/home')
      })
  }
}
