import express from 'express'
import * as bodyParser  from 'body-parser'
import { createConnection } from 'typeorm'
import { Estudiante } from './models/estudiante.model'
import { Curso } from './models/curso.model'
import { apiRouter } from './api.router'
import { Nota } from './models/nota.model'

createConnection({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'nodeProject',
    entities: [Estudiante, Curso, Nota],
    synchronize: true
}).then(async (connection) => {
    await connection.synchronize()
}).catch(error => console.log(error))

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', apiRouter.getRouter())

app.listen(8080, () => console.log('Ready on port 8080'))