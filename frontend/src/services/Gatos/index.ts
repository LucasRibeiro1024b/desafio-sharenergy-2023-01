/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import api from "../axiosConfig";

interface StatusCode{
  status : number
}

const buscar = async(statusCode : StatusCode) =>{
    const resultado = await  api.get("gatos", {
      params : statusCode
    })
    return resultado.data
 }




 export default {buscar}
