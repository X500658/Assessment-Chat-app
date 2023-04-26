import { db } from '../database'
import { getUserByNameRoute, getUsersRoute } from './getUsers';

const bcrypt = require('bcrypt')
// how I used brcrypt
// https://gist.github.com/patidardhaval/bee909e14dc864272e515ca731c1ba88

export const SignUpRoute = {
    method: 'POST',
    path: '/api/signup/',
    handler: async (req, h) => {
        const {name='', password=''} = req.payload
        const hash = await bcrypt.hash(password, bcrypt.genSalt());
        await db.query(
            `INSERT INTO users (name, password) VALUES (?, ?)`,
            [name, hash]
        )
        return {name, message:"Sucessfully signed up!"}
    }
}

export const LogInRoute = {
    method: 'POST',
    path: '/api/login/',
    handler: async (req, h) => {
        const {name='', password=''}= req.payload
        const {results} = await db.query(
            `SELECT * FROM users WHERE name=?`,
            [name]
        )
        let matchuser
        for(const user of results){
            if(await bcrypt.compare(password, user.password)){
                matchuser=user
                break
            }
        };
        await db.query(
            `UPDATE users SET is_online=1, last_online=? WHERE id=?`,
            [(new Date()), matchuser.id]
        )
        const {results2} = await db.query(
            `SELECT * FROM users WHERE id=?`,
            [matchuser.id]
        )
        return {message: "Logged In!"}
    }
}