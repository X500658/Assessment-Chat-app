export interface User{
    id: number,
    name: string,
    password: string
    pic: string,
    is_online?: boolean,
    last_online?: Date | string,
    room_id?: number
}

export interface Message{
    id: number,
    content: string,
    sender_id?: number //prevent conflict with sender
    sender?: User ,
    time_sent: Date | string,
    room_id?: number
}

export interface Room{
    id: number,
    name?: string
    room_to_members: number[], 
    last_message?: Message,
    other_members?: User[], //excludes current_user
    pic?: string
}