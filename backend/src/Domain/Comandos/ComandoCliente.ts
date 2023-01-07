import Clientes from "../Entidades/Clientes";
import { Cliente } from "../Interfaces/Cliente";
import ClienteRepository from "../../Infra/Repositorios/RepositorioCliente"
import IPaginacao from "../Interfaces/Paginacao";
import Retorno from "../Interfaces/Retorno";



async function comandoClienteCadastrar(cliente: Cliente): Promise<Retorno<Cliente>> {
  const repositorio = new ClienteRepository()

  let retorno: Retorno<Cliente>;
  const validarCliente = new Clientes({
    cpf: cliente.cpf,
    email: cliente.email,
    nome: cliente.nome,
    telefone: cliente.telefone,
    endereco: cliente.endereco
  })

  if (!validarCliente.erro) {
    const salvar = await repositorio.criar({
      cpf: cliente.cpf,
      email: cliente.email,
      nome: cliente.nome,
      telefone: cliente.telefone,
      endereco: cliente.endereco
    })

    retorno = {
      erros: validarCliente.erro,
      dados: [],
      mensagem: "Cliente cadastrado",
      id: salvar
    }
    return retorno
  }

  retorno = {
    erros: validarCliente.erro,
    mensagem: "Erro ao realizar cadastro",
  }
  return retorno
}

async function comandoClienteDelete(id: string) {


}

async function comandoClienteBuscar(query: IPaginacao): Promise<Retorno<Cliente>> {
  const repositorio = new ClienteRepository()
  const clientes = repositorio.findMany(query)
  return clientes;
}



export default { comandoClienteCadastrar, comandoClienteDelete, comandoClienteBuscar }