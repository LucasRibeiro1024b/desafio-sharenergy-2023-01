import api from "./config"
const query = `?page=${3}&results=${1}&seed=abc`


interface IPaginacao {
  page : number
  resultado ?: number
}

async function buscarTodos({page, resultado = 10} : IPaginacao){
  const result = await api.get( `?page=${page}&results=${resultado}&seed=abc`)
  return result.data;
}



export default buscarTodos;