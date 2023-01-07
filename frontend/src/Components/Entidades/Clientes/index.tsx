
import { useState } from "react";
import { Button } from "antd";
import useSWR from "swr"
import { ICliente, IDadosTabela } from "../../../Interfaces/Cliente";
import Tabela from "../../Tabela/Index";
import  ColunasTabela  from "./lista/colunas";
import S from "../../Container"
import MenuTabela from "./style";
import FormCadastro from "./cadastro";
import servicos from "../../../services/Clientes/index"

function ListaClientes(){
const [linhaTabela , setLinhaTabela] = useState<IDadosTabela<any>>({
  visivel : false,
  cliente : null
});
const [visivel, setVisivel] = useState<boolean>(false)

 const {data : dados } = useSWR("clientes", async () => servicos.buscar() )

 console.log(dados)
  function pegarDadosLinha(value : ICliente, visivel : boolean){
    setLinhaTabela({cliente: value, visivel : visivel})
    setVisivel(true)
  }

  function abrirModal(){
    setVisivel(true)
  }

  return (
  <S.Container>
    <MenuTabela>
      <Button onClick={abrirModal}>Cadastrar Novo</Button>
    </MenuTabela>
    <Tabela
      dados={dados?.comando.dados}
      colunas={ColunasTabela({pegarDadosLinha,linhaTabela}) }
      />
    <FormCadastro
      dados={linhaTabela?.cliente}
      visivel={visivel}
      setVisivel={setVisivel}
      />
  </S.Container>
)}



export default ListaClientes
