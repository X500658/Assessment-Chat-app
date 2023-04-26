import { Component } from '@angular/core';
import { RoomService } from '../service/room.service';
import { Room } from '../types';

@Component({
  selector: 'app-roonmlist',
  templateUrl: './roonmlist.component.html',
  styleUrls: ['./roonmlist.component.css']
})
export class RoonmlistComponent {
  rooms: Room[] = []
  // rooms$!: Observable<Room[]>;
  // private searchTerms = new Subject<string>();
    
  constructor(private roomService: RoomService) {}
  
  search(term: string): void {
    // this.searchTerms.next(term);
    console.log("tes")
  }
  
  ngOnInit(): void {
    // console.log("tes")
    // this.userService.getUsers()
    //   .subscribe(users => this.buddies = users)
    this.getRooms()
  }
  
  getRooms(): void {
    this.rooms = this.roomService.getRooms()
  }
}
