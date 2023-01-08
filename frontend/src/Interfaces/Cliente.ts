export interface ICliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco?: Endereco;
  cpf: string;
}

export interface Endereco {
  id?: string;
  rua?: string;
  bairro?: string;
  cidade?: string;
}

export interface IDadosTabela<T> {
  visivel: boolean;
  cliente: T | null;
}
