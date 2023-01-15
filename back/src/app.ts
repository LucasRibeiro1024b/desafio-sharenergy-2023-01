import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as logger from 'morgan'

import { conectBdToServer } from './config/db'
import { userRouter } from './routes/user'

export const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

conectBdToServer();

app.use('/user', userRouter)
app.use('/', (req, res) => res.send('Sharenergy NG challenge Ramiro Mares de Oliveira'))