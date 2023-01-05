export interface ICliente {
  id: string;
  nome: string;
  email: string;
  urlFoto: string;
  telefone: string | number;
}


export interface IDadosTabela<T>{
  visivel : boolean
  cliente : T | null
}
