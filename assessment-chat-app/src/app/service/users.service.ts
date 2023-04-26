import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DatePipe } from '@angular/common';

import { User } from '../types';
import { sampleUsers } from '../sample_data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('/api/users/')
  }

  getBuddies2(): User[] {
    let buddies = sampleUsers
    // const today = new Date();
    buddies.forEach(buddy => {
      buddy.last_online= new DatePipe('en-US').transform(buddy.last_online, 'YYYY-MM-dd hh:mm:ss')!
    })
    return buddies
  }

  getBuddies(): User[] {
    let buddies = sampleUsers
    const today = new Date();
    buddies.forEach(buddy => {
      if(buddy.last_online==undefined){
        buddy.last_online="Never"
      }else{
        buddy.last_online=new Date(buddy.last_online)
        if (buddy.last_online && today.toDateString() === buddy.last_online.toDateString()) {
          const duration = new Date (today.getTime() - buddy.last_online.getTime());
          if(duration.getHours() < 24 ){
            buddy.last_online= + duration.getHours()+" hours ago"
          }else{
            buddy.last_online= + duration.getMinutes()+" minutes ago"
          }
        }else{
            buddy.last_online= new DatePipe('en-US').transform(buddy.last_online, 'MMM d, YYYY')!
        }
      }
    })
    return buddies
  }

  getUser(id: number): User {
    if(id==1) //hardcoded for testing
      return this.getSelf()
    else
      return sampleUsers.find(user => user.id===id)!;
  }

  getSelf(): User{ //current logged in user
    return {id: 1, name:"You", password:"", pic:"", is_online:true, last_online: new Date()}
  }

  //date cleaner
  cleaner(buddies: User[]): User[]{
    const today = new Date();
    buddies.forEach(buddy => {
      if(buddy.last_online==undefined){
        buddy.last_online="Never"
      }else{
        buddy.last_online=new Date(buddy.last_online)
        if (buddy.last_online && today.toDateString() === buddy.last_online.toDateString()) {
          const duration = new Date (today.getTime() - buddy.last_online.getTime());
          if(duration.getHours() < 24 ){
            buddy.last_online= + duration.getHours()+" hours ago"
          }else{
            buddy.last_online= + duration.getMinutes()+" minutes ago"
          }
        }else{
            buddy.last_online= new DatePipe('en-US').transform(buddy.last_online, 'MMM d, YYYY')!
        }
      }
    })
    return buddies
  }
}
