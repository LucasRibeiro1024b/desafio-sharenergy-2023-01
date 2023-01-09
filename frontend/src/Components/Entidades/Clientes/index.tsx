/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Button, TablePaginationConfig } from 'antd';
import useSWR from 'swr';
import qs from 'qs';
import { ICliente, IDadosTabela } from '../../../Interfaces/Cliente';
import Tabela from '../../Tabela/Index';
import ColunasTabela from './lista/colunas';
import S from '../../Container';
import MenuTabela from './style';
import FormCadastro from './cadastro';
import servicos from '../../../services/Clientes/index';
import TableParams from '../../../Interfaces/Tabela';
import IPaginacao from '../../../Interfaces/Paginacao';
import servico from '../../../services/Clientes'
import ShowDeleteConfirm from '../../Modal/ModalAviso';



function ListaClientes() {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination :{
      defaultCurrent : 1,
      current : 1,
      pageSize : 10,
    }
  });
  const [linhaTabela, setLinhaTabela] = useState<IDadosTabela<any>>({
    visivel: false,
    cliente: null
  });
  const [visivel, setVisivel] = useState<boolean>(false);
  const [page, setPage] = useState<IPaginacao>({
    skip : 1,
    take : 10
  });

  const [visivelModalDelete, setVisivelModalDelete] = useState<boolean>(false)
  const [idUser , setIdUser] = useState<string>()

  const {
    data: dados,
    isLoading,
    mutate
  } = useSWR(`clientes${qs.stringify(page)}`, async () => await servicos.buscar(page));

  console.log(tableParams)
   useEffect(() => {
    setTableParams({
      pagination: {
        current: dados?.comando.paginacao.skip === 0 ? 1 : dados?.comando.paginacao.skip,
        pageSize: dados?.comando.paginacao.take,
        total:dados?.comando.paginacao.total,
        defaultCurrent : 1,
        defaultPageSize :10
      }
    });
    mutate();
  }, [dados, mutate]);

  function handleTableChange(current : number, pageSize : number) {
    console.log(current, pageSize)
    setPage({
      skip: Number(current) === 0 ? 1 :  Number(current),
      take: Number(pageSize) === 0 ? 10 :  Number(pageSize)
    });
   mutate();
  }
  console.log({page})
  function pegarDadosLinha(value: ICliente, visivel: boolean) {
    setLinhaTabela({ cliente: value, visivel: visivel });
    setVisivel(true);
    mutate()
  }


  function deletarDadosLinha(value: ICliente) {
    setIdUser(value?.id)
    setVisivelModalDelete(true);
  }


 async function abrirModalDelete(){
    const deletar = await servico.deletar(idUser as string)
    setVisivelModalDelete(false)
    mutate()
  }

  function fecharModalDelete(){
    setVisivelModalDelete(false)
  }
  function abrirModal() {
    setVisivel(true);
  }


  function fecharModal() {
    setVisivel(false);
    setLinhaTabela({
      cliente: null,
      visivel
    })
  }


  return (
    <S.Container>
      <MenuTabela>
        <Button onClick={abrirModal}>Cadastrar Novo</Button>
      </MenuTabela>
      <Tabela
        dados={dados?.comando.dados}
        colunas={ColunasTabela({ pegarDadosLinha,linhaTabela, deletarDadosLinha })}
        loading={!dados ?? isLoading}
        params={tableParams?.pagination as any}
        onShowSizeChange={handleTableChange}
      />
      <FormCadastro
         dados={linhaTabela.cliente as ICliente}
         visivel={visivel}
         setVisivel={setVisivel}
         fecharModal={fecharModal}
        />
      <ShowDeleteConfirm
        key={'modal delete'}
        content={"Deseja realmente excluir esse cliente ?"}
        title ={"Alerta!"}
        okText ={"Sim"}
        cancelText = {"Não"}
        open ={visivelModalDelete}
        onOk ={abrirModalDelete}
        onCancel={fecharModalDelete}
      />
    </S.Container>
  );
}

export default ListaClientes;
