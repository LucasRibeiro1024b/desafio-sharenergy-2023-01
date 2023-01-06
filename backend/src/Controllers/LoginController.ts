import {Router,Request, Response } from 'express'
import User from '../Domain/Entidades/Clientes';

const routerLogin = Router()

routerLogin.get("/", async (req : Request, res : Response)=>{
    res.send({"msg":"você está conectado"})
})

 routerLogin.post("/login", async (req : Request, res : Response)=>{
  const { nome , senha} = req.body;
  res.send({ nome , senha}).status(500)
})



export default routerLogin;