/* eslint-disable import/no-anonymous-default-export */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Usuarios from "../../Interfaces/Usuarios";
import api from "../axiosConfig";

interface Paginacao{
  page : number
  resultado : number
}

const buscarTodos = async (paginacao ?:Paginacao) =>{
  const resultado =  await api.get("usuarios",{
    params : paginacao,
  })
  return resultado.data
}



export default {buscarTodos};
