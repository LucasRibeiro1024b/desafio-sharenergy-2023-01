import {Router,Request, Response } from 'express'


const routerCliente = Router()


routerCliente.get("/clientes", async (req : Request, res : Response)=>{
  res.send({"msg":"você está conectado"})
})


export default routerCliente;
