/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, Outlet } from "react-router-dom";
import pegarToken from "../services/pegarToken";
interface IRotasPrivadas {
  estaAutenticado :string ,
}

function RotasPrivadas(){
  const estaAutenticado  = pegarToken()
  return(  estaAutenticado ? <Outlet/> : <Navigate to={"/"}/> )
}


export default RotasPrivadas;