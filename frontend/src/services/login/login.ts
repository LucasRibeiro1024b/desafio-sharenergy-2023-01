/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '../axiosConfig';

interface IDadosLogin {
  nome: string;
  senha: string;
}
const logar = async (dados: IDadosLogin) => {
  const resultado = await api.post('http://localhost:3001/api/login', dados);
  localStorage.setItem('user', JSON.stringify(resultado.data));
  console.log(resultado)
  return resultado.data;
};

export default { logar };
