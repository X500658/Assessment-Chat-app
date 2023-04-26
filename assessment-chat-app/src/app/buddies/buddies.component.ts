import { Component, OnInit } from '@angular/core';
import { User } from '../types';
import { UserService } from '../service/users.service';

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.css']
})
export class BuddiesComponent implements OnInit{
  buddies: User[] =[]

  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.getBuddies()
  }

  getBuddies(): void {
    this.buddies = this.userService.getBuddies()
  }
}
