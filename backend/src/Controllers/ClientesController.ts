import { Router, Request, Response } from 'express'
import servico from '../Domain/Comandos/ComandoCliente';
import { Cliente } from '../Domain/Interfaces/Cliente';

const routerClientes = Router();


routerClientes.get("/clientes", async (req: Request, res: Response) => {
  const comando = await servico.comandoClienteBuscar()
  res.send({ comando })
})

routerClientes.post("/clientes", async (req: Request, res: Response) => {
  const cliente: Cliente = req.body;
  const comando = await servico.comandoClienteCadastrar(cliente)
  console.log(comando)
  res.send({ comando })
})

routerClientes.put("/clientes", async (req: Request, res: Response) => {

})

routerClientes.delete("/clientes", async (req: Request, res: Response) => {

})




export default routerClientes;