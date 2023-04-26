import { Injectable } from '@angular/core';
import { UserService } from './users.service';
import { DatePipe } from '@angular/common';
import { sampleRooms } from '../sample_data';
import { Room } from '../types';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor( private userService: UserService) { }

  getRooms(): Room[] {
    let rooms = sampleRooms
    const today = new Date();
    rooms.forEach(room => {
      if(room.last_message){
        room.last_message.time_sent =new Date(room.last_message.time_sent)
        if (room.last_message.time_sent && today.toDateString() === room.last_message.time_sent.toDateString()) {
          const duration = new Date (today.getTime() - room.last_message.time_sent.getTime());
          if(duration.getHours() < 24 ){
            room.last_message.time_sent= + duration.getHours()+" hours ago"
          }else{
            room.last_message.time_sent= + duration.getMinutes()+" minutes ago"
          }
        }else{
            room.last_message.time_sent= new DatePipe('en-US').transform(room.last_message.time_sent, 'MMM d, YYYY')!
        }
        room.last_message.sender=this.userService.getUser(room.last_message.sender_id!)
        if(room.room_to_members.length>1){
          let name: string;
          room.room_to_members.forEach(member => {
            let user=this.userService.getUser(member)
            if(member!=1){
              if(room.other_members==undefined)
                room.other_members=Array(user)
              else
                room.other_members.push(user)
              
              if(name==undefined)
                name=user.name
              else
                name+=", "+user.name
            }
            if(room.pic==undefined || room?.last_message?.sender?.id==1)
              room.pic=user.pic
          });
          if(room.name==undefined)
            room.name=name!
        }
      }
    });
    return rooms
  }
}
