export interface User{
    id: number,
    name: string,
    pic: string,
    online: boolean,
}

export interface Message{
    id: number,
    sender: string,
    room: string
    time_sent: Date
}

export interface Room{
    id: number,
    room_to_members: number[]   
}