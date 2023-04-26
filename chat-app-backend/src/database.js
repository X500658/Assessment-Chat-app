import mysql from 'mysql'

const connection = mysql.createConnection({
    host: '10.10.10.15', 
    user: 'chat-app-user',
    password: 'Z0m[ME]dZ.ELycK9',
    database: 'chat_app'
})

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if(error)
                    reject(error)
                resolve({results, fields})
            })
        }),
    end: () => connection.end()
}