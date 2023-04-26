import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http: HttpClient,
  ) { }

  login(name: string, password: string): Observable<User> {
    return this.http.post<User>(
      `/api/login/`,
      {name, password},
      httpOptions
    )
  }

  signup(name: string, password: string): Observable<User> {
    return this.http.post<User>(
      `/api/signup/`,
      {name, password},
      httpOptions
    )
  }

}