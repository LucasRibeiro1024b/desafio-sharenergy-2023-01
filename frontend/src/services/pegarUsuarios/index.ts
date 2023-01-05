
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Usuarios from "../../Interfaces/Usuarios";
import api from "../axiosConfig";

const buscarTodos = async (paginacao ?:any) =>{
  const resultado =  await api.get("usuarios",{
    params : paginacao,
  })
  return resultado.data
}



export default {buscarTodos};
