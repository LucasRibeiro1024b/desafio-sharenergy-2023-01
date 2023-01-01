import express from "express";
import cors from "cors"
import router from "./src/Controllers/LoginController";


const app = express();


app.use(cors({origin:"http://localhost:3000"}))
app.use(express.json());
app.use(router)

const port = process.env.PORT_SERVER ?? 3001

app.listen(port,() =>{
  console.log(`Você está conectado na porta ${port}`)
})


export default router;