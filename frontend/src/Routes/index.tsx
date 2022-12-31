// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NaoExiste from "../Pages/NaoExiste";


function Rotas (){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path="*" element={<NaoExiste/>}/>
     </Routes>
    </BrowserRouter>
  )
}


export default Rotas;