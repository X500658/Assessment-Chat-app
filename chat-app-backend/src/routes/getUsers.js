import { db } from "../database";

export const getUsersRoute = {
    method: 'GET',
    path: '/api/users/',
    handler: async (req, h) => {
        const {results} = await db.query(
            `SELECT * FROM users`
        )
        return results
    }
}

export const getUserByIdRoute = {
    method: 'GET',
    path: '/api/users/id/{id}/',
    handler: async (req, h) => {
        const id = req.params.id
        const {results} = await db.query(
            `SELECT * FROM users WHERE id=?`,
            [id]
        )
        return results
    }
}

export const getUserByNameRoute = {
    method: 'GET',
    path: '/api/users/{name}/',
    handler: async (req, h) => {
        const name = req.params.name
        const {results} = await db.query(
            `SELECT * FROM users WHERE name=?`,
            [name]
        )
        return results
    }
}