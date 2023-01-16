import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as logger from 'morgan'

import { conectBdToServer } from './config/db'
import { userRouter } from './routes/user'
import { adminRouter } from './routes/userAdmin'

export const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

conectBdToServer();

app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/', (req, res) => res.send('Sharenergy challenge Ramiro Mares de Oliveira'))