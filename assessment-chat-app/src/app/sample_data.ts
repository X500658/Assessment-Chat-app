import { User, Room } from './types';

export const sampleUsers: User[] = [
{ "id": 18, "name": "Asseylum Vers Allusia","password":"a", "pic": "5hW9jAG.jpg", "is_online": false, "last_online": new Date(2023,3,2,4,17,26)},
{ "id": 19, "name": "Amifumi Inko","password":"a", "pic": "zIkly84.jpg", "is_online": false, "last_online": new Date(2023,3,26,4,17,26)},
{ "id": 20, "name": "Rayet Areash","password":"a", "pic": "g5kWhMn.jpg", "is_online": true, "last_online": new Date(168064492)},
{ "id": 21, "name": "Eddelrittuo ","password":"a", "pic": "kuIB8n8.jpg", "is_online": false, "last_online": new Date(168243760)},
{ "id": 22, "name": "Nina Klein","password":"a", "pic": "GnEjSJf.jpg", "is_online": true, "last_online": new Date(168102504)},
{ "id": 23, "name": "Darzana Magbaredge","password":"a", "pic": "1wbz6Ab.jpg", "is_online": true, "last_online": new Date(168180933)},
{ "id": 24, "name": "Kaizuka Yuki","password":"a", "pic": "zR29l3C.jpg"},
{ "id": 25, "name": "Fuuki Iinchou","password":"a", "pic": "lBS2Jlh.jpg", "is_online": true, "last_online": new Date(168164976)},
{ "id": 26, "name": "Akutsu Ruri","password":"a", "pic": "0laCycS.jpg", "is_online": true, "last_online": new Date(168062094)},
{ "id": 27, "name": "Shirogane Kei","password":"a", "pic": "1UFRunS.jpg", "is_online": true, "last_online": new Date(168112436)},
{ "id": 28, "name": "Hayasaka Ai","password":"a", "pic": "jRjFjJn.jpg", "is_online": true, "last_online": new Date(168112436)},
{ "id": 29, "name": "Shinomiya Kaguya","password":"a", "pic": "OdLGEpX.jpg", "is_online": true, "last_online": new Date(168112436)},
{ "id": 30, "name": "Fujiwara Chika","password":"a", "pic": "ACdOZbb.jpg", "is_online": true, "last_online": new Date(168112436)},
{ "id": 31, "name": "Iino Miko","password":"a", "pic": "B0nUSpk.jpg", "is_online": true, "last_online": new Date(168112436)},
]

export const sampleRooms: Room[]= [
{"id": 18, "room_to_members": [1,18] , "last_message":
    {"id": 18, "content": "Wafds", "sender_id": 1, "time_sent": new Date(2023,3,2,4,17,26)}
},
{"id": 19, "room_to_members": [1,19] , "last_message":
    {"id": 19, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(2023,3,26,4,17,26)}
},
{"id": 20, "room_to_members": [1,20, 28] , "last_message":
    {"id": 20, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 21, "room_to_members": [1,21] , "last_message":
    {"id": 21, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 22, "room_to_members": [1,22] , "last_message":
    {"id": 22, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 23, "room_to_members": [1,23] , "last_message":
    {"id": 23, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 24, "room_to_members": [1,24] , "last_message":
    {"id": 24, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 25, "room_to_members": [1,25] , "last_message":
    {"id": 25, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 26, "room_to_members": [1,26] , "last_message":
    {"id": 26, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 27, "room_to_members": [1,27] , "last_message":
    {"id": 27, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 28, "room_to_members": [1,28] , "last_message":
    {"id": 28, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 29, "room_to_members": [1,29] , "last_message":
    {"id": 29, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 30, "room_to_members": [1,30] , "last_message":
    {"id": 30, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 31, "room_to_members": [1,31, 21] , "last_message":
    {"id": 31, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
{"id": 32, "name":"GC #1", "room_to_members": [1,19, 25] , "last_message":
    {"id": 32, "content": "Wazap yo", "sender_id": 1, "time_sent": new Date(168112436)}
},
]