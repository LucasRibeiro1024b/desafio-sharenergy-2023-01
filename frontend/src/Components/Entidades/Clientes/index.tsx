/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ICliente, IDadosTabela } from "../../../Interfaces/Cliente";
import Tabela from "../../Tabela/Index";
import  ColunasTabela  from "./lista/index";


function ListaClientes(){
const [linhaTabela , setLinhaTabela] = useState<IDadosTabela<any>>({
  visivel : false,
  cliente : null
});
  function pegarDadosLinha(value : ICliente, visivel : boolean){
    setLinhaTabela({cliente: value, visivel : visivel})
  }

  return <><Tabela dados={[]} colunas={ColunasTabela({pegarDadosLinha,linhaTabela}) }/></>
}



export default ListaClientes
