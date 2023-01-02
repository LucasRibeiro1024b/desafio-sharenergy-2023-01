/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ICliente, IDadosTabela } from "../../../Interfaces/Cliente";
import Tabela from "../../Tabela/Index";
import { colunasTabela } from "./lista/colunas";


function ListaClientes(){
const [linhaTabela , setLinhaTabela] = useState<IDadosTabela>({
  visivel : false,
  cliente : null
});
  function pegarDadosLinha(value : ICliente, visivel : boolean){
    setLinhaTabela({cliente: value, visivel : visivel})
  }

  return <><Tabela dados={[]} colunas={colunasTabela({pegarDadosLinha,linhaTabela}) }/></>
}



export default ListaClientes