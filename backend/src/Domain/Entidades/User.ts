import Entidade from "./EntidadeBase";


class User extends Entidade{
  nome!: string;
  senha!: string;
  constructor(nome : string, senha : string ){
    super()
    this.ValidarNome(nome)
    this.ValidarSenha(senha)
  }

  private async ValidarNome (nome : string){
    if(nome && nome?.length > 0 || nome && nome != null){
      this.nome = nome
    }
  }

  private async ValidarSenha(senha : string){
    if(senha.length > 0 || senha != null){
      this.senha = senha
    }
  }
}



export default User;