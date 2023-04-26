import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/users.service';
import { User } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  buddies: User[] = []

  constructor(private userSerivce: UserService){}

  ngOnInit(): void {
    this.userSerivce.getUsers()
      .subscribe(buddies =>
        this.buddies = this.userSerivce.cleaner(buddies)
    )
  }
}
