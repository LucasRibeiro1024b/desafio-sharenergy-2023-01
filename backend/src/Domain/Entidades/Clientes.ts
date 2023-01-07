import { Cliente, Endereco } from "../Interfaces/Cliente";
import Erros from "../Interfaces/Erros";



class Clientes implements Cliente {
  nome!: string;
  email!: string;
  telefone!: string;
  endereco?: Endereco | undefined;
  cpf!: string;
  erro !: Erros;

  constructor({ cpf, email, nome, telefone, endereco }: Cliente) {
    this.ValidarNome(nome)
    this.ValidarEmail(email)
    this.ValidarCPF(cpf)
    this.ValidarTelefone(telefone)
    this.ValidarEndereco(endereco)
  }


  private async ValidarNome(nome: string) {
    if (nome && nome?.length > 0 || nome && nome != null) {
      this.nome = nome
    }
    /*    this.erro ={
          campo: "nome",
          mensagem: "Campo invalido"
        }
        return this.erro */
  }

  private async ValidarTelefone(telefone: string) {
    if (telefone && telefone.length > 0 || telefone != null) {
      this.telefone = telefone
    }
    /* this.erro={
      campo: 'telefone',
      mensagem: "Campo invalido"
    } */
  }

  private async ValidarEmail(email: string) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    if (regex.test(email)) {
      this.email = email
    }
    /*     this.erro.push({
          campo: email,
          mensagem: "Campo invalido"
        }) */
    return this.erro
  }

  private async ValidarCPF(cpf: string) {
    if (cpf.length > 0 || cpf != null) {
      this.cpf = cpf
    }
    /*     this.erro={
          campo: 'cpf',
          mensagem: "Campo invalido"
        }
        return this.erro */
  }

  private async ValidarEndereco(endereco?: Endereco) {
    if (endereco) {
      if (endereco.bairro && endereco.bairro.length > 0 && endereco.cidade && endereco.cidade.length > 0 && endereco.rua && endereco.rua.length > 0) {
        this.endereco = {
          bairro: endereco?.bairro,
          cidade: endereco?.cidade,
          rua: endereco?.rua
        }
      }
      /*       [endereco].map(campo=>{
            this.erro.push({
              campo : campo as string,
              mensagem :"Campo invalido"
            })}) */
      return this.erro
    }

  }
}



export default Clientes;