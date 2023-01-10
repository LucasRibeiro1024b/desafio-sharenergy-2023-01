/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '../axiosConfig';

interface IDadosLogin {
  nome: string;
  senha: string;
  checked ?: boolean
}
const logar = async (dados: IDadosLogin) => {
  const resultado = await api.post('login', dados);
  if(resultado.data.erro){
    return resultado.data
  }
  if(resultado.data.checked === false){
  sessionStorage.setItem('user', JSON.stringify(resultado.data))
   return resultado.data;
  }
  localStorage.setItem('user', JSON.stringify(resultado.data));
  return resultado.data;
};

export default { logar };
