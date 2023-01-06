// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Clientes from "../Pages/Clientes";
import Dogs from "../Pages/Dogs";
import Gatos from "../Pages/Gatos";
import Home from "../Pages/Home";
import NaoExiste from "../Pages/NaoExiste";
import Usuarios from "../Pages/Usuarios";
import pegarToken from "../services/Token";
import RotasPrivadas from "./rotaPrivada";


function Rotas (){
  const user = () => pegarToken()
  useEffect(()=>{
    user()
  },[])
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NaoExiste/>}/>
      <Route  element={<RotasPrivadas/>}>
        <Route path="/clientes" element={<Clientes/>}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
        <Route path="/gatos" element={<Gatos/>}/>
        <Route path="/dogs" element={<Dogs/>}/>
      </Route>
   </Routes>
  </BrowserRouter>
  )
}


export default Rotas;
