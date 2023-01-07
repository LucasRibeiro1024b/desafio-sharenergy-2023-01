/* eslint-disable import/no-anonymous-default-export */
import { ICliente } from "../../Interfaces/Cliente";
import api from "../axiosConfig";

interface Paginacao{
  page : number
  resultado : number
}

const buscar = async(statusCode ?: Paginacao) =>{
  const resultado = await  api.get("clientes", {
    params : statusCode
  })
  return resultado.data
}

const salvar = async(dados: ICliente) =>{
  const resultado = await  api.post("clientes", dados)
  return resultado.data
}


export default {buscar,salvar}
