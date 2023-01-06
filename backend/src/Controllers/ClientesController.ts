import {Router,Request, Response } from 'express'
import servico from '../Domain/Comandos/ComandoCliente';
import { Cliente } from '../Domain/Interfaces/Cliente';

const routerClientes = Router();


routerClientes.get("/clientes", async(req:Request, res:Response) =>{

})

routerClientes.post("/clientes", async(req:Request, res:Response) =>{
  const cliente : Cliente = req.body;
  const comando = await servico.comandoCliente(cliente)
})

routerClientes.put("/clientes", async(req:Request, res:Response) =>{

})

routerClientes.delete("/clientes", async(req:Request, res:Response) =>{

})




export default routerClientes;