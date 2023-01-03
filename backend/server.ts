import express from "express";
import cors from "cors"
import  routerLogin from "./src/Controllers/LoginController";
import routerCliente from "./src/Controllers/ClienteController";   "./src/Controllers/ClienteController";


const app = express();


app.use(cors({origin:"http://localhost:3000"}))
app.use(express.json()); 
app.use("/api",routerLogin)
app.use("/api",routerCliente)

const port = process.env.PORT_SERVER ?? 3001

app.listen(port,() =>{
  console.log(`Você está conectado na porta ${port}`)
})

