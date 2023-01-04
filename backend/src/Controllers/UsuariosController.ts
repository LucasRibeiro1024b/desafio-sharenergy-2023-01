import {Router,Request, Response } from 'express'
import buscarTodos from '../Domain/Services/BuscarUsuarios';

const routerUsuarios = Router()


routerUsuarios.get("/usuarios", async (req : Request, res : Response)=>{
   const resposta = await buscarTodos({
    page : 1,
    resultado : 10
   })
  res.send({dados:resposta}).status(200)
})


export default routerUsuarios;
