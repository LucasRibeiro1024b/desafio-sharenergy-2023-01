import Erros from "./Erros"

interface Retorno<T> {
  dados ?: T[]
  erros ?: Erros[] | Erros
  total ?: number
  mensagem ?: string
  id ?:  string
}


export default Retorno