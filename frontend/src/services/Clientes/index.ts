/* eslint-disable import/no-anonymous-default-export */
import api from "../axiosConfig";

interface Paginacao{
  page : number
  resultado : number
}

const buscar = async(statusCode : Paginacao) =>{
  const resultado = await  api.get("clientes", {
    params : statusCode
  })
  return resultado.data
}



export default {buscar}
