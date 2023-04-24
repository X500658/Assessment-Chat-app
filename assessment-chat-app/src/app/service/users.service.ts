import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../types';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }
  getUser(id: Number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }

  /** PUT: update the hero on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateUser'))
      );
  }

  /** POST: add a new hero to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('addUser'))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  /* GET heroes whose name contains search term */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersUrl}/?name=${term}`).pipe(
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }
}
