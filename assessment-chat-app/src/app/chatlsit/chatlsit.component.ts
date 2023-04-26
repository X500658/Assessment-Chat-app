import { Component, OnInit } from '@angular/core';
 import { User, Room } from '../types';
 import { UserService } from '../service/users.service'

@Component({
  selector: 'app-chatlsit',
  templateUrl: './chatlsit.component.html',
  styleUrls: ['./chatlsit.component.css']
})

export class ChatlsitComponent implements OnInit {
  buddies: User[] = []
  // private searchTerms = new Subject<string>();

  constructor(private userService: UserService) {}

  search(term: string): void {
  //   // this.searchTerms.next(term);
    console.log("tes")
  }

  ngOnInit(): void {
    this.getBuddies()
  }

  getBuddies(): void {
    this.buddies = this.userService.getBuddies2()
  }
}
