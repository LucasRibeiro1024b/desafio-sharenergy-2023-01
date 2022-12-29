import  Express  from "express";
import { Router } from "express";
const app = Express();
const router = Router();
const port = process.env.PORT_SERVER


app.listen(port,() =>{
  console.log(`Você está conectado na porta ${port}`)
})



export default {router};