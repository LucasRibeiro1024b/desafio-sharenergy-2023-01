<<<<<<< HEAD
import  Express  from "express";
import { Router } from "express";
const app = Express();
const router = Router();
const port = process.env.PORT_SERVER


app.listen(port,() =>{
  console.log(`Você está conectado na porta ${port}`)
})



=======
import  Express  from "express";
import { Router } from "express";
const app = Express();
const router = Router();
const port = process.env.PORT_SERVER


app.listen(port,() =>{
  console.log(`Você está conectado na porta ${port}`)
})



>>>>>>> 18839f247b47473befba7274cd343f681f952ed4
export default {router};