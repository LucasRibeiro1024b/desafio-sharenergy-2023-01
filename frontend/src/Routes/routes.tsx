// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NaoExiste from "../Pages/NaoExiste";
import pegarToken from "../services/pegarToken";
import RotasPrivadas from "./rotaPrivada";


function Rotas (){
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NaoExiste/>}/>
      <Route path="/login" element={<RotasPrivadas estaAutenticado={pegarToken() != null ? true : false} children={<NaoExiste/>} />}/>
   </Routes>
  </BrowserRouter>
  )
}


export default Rotas;