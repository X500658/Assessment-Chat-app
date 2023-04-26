# ASG Assesment Chat App
Very Incomplete, I'm not familiar with NodeJS and the frameworks yet

## Progress
* Created finalized structure for /register, /home, /buddies and /profile
* Started creatings backend with working routes

## Unfinished
* main chatting page
* searching for new buddies
* real data from MySQL + sorting the items 
* submit buttons in /register don't work despite the working backend routes
* types.js and db design are mismatched
    - types.js was used to quickly mock up sample data
        - Users.room_id is to be used as a quicklink to DMs
        - Message.sender is meant to replace sender_id when backend is ready
        - Room.other_members is meant to replace room_to_members when backend is ready
    - DB design doesn't include any pic fields since the sample data uses strings (imgur links) instead of actual images

