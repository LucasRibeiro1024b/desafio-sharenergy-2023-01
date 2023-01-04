import {Router,Request, Response } from 'express'
import buscarTodos from '../Domain/Services/BuscarUsuarios';



const routerCliente = Router()


routerCliente.post("/clientes", async (req : Request, res : Response)=>{
   const resposta = await buscarTodos({
    page : 10
   })
  res.send({"msg":resposta})
})


export default routerCliente;
