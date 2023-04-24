import mysql from 'mysql'

const connection = mysql.createConnection({
    host: '10.10.10.15', 
    user: 'hapi-buy-and-sell',
    password: 'rddh1kW-jBcOWL99',
    database: 'buy-and-sell'
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