import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 import { User, Room } from '../types';
 import { UserService } from '../service/users.service'

@Component({
  selector: 'app-chatlsit',
  templateUrl: './chatlsit.component.html',
  styleUrls: ['./chatlsit.component.css']
})

export class ChatlsitComponent {
  buddies$!: Observable<User[]>;
  rooms$!: Observable<Room[]>;
  private searchTerms = new Subject<string>();

  constructor(private userService: UserService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.buddies$ = this.userService.getUsers()
    // this.searchTerms.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((term: string) => this.userService.searchUsers(term)),
    // );
  }
}
