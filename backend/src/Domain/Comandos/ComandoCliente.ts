import Clientes from "../Entidades/Clientes";
import { Cliente } from "../Interfaces/Cliente";




async function comandoCliente (cliente:Cliente) {

  const validarCliente = new Clientes({
    cpf: cliente.cpf,
    email : cliente.email,
    nome : cliente.nome,
    telefone : cliente.telefone,
    endereco : cliente.endereco
  })

}


export default {comandoCliente}