import express from "express";
import cors from "cors"
import  routerLogin from "./src/Controllers/LoginController";
import routerUsuarios from "./src/Controllers/UsuariosController";   "./src/Controllers/ClienteController";


const app = express();


app.use(cors({origin:"http://localhost:3000"}))
app.use(express.json());
app.use("/api",routerLogin)
app.use("/api",routerUsuarios)

const port = process.env.PORT_SERVER ?? 3001

app.listen(port,() =>{
  console.log(`Você está conectado na porta ${port}`)
})

