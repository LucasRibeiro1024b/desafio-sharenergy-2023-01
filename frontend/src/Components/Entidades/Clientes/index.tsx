/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Button, TablePaginationConfig, message } from 'antd';
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
  const [messageApi, contextHolder] = message.useMessage()
  const {
    data: dados,
    isLoading,
    mutate
  } = useSWR(`clientes${qs.stringify(page)}`, async () => await servicos.buscar(page));

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
  }, [dados]);

  function handleTableChange(current : number, pageSize : number) {
    setPage({
      skip: Number(current) === 0 ? 1 :  Number(current),
      take: Number(pageSize) === 0 ? 10 :  Number(pageSize)
    });
   mutate();
  }

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
    if(deletar.comando.id){
      success(deletar?.comando?.mensagem)
    }
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
    mutate()
  }

  const success = (mensagem : string) => {
    messageApi.open({
      type: 'success',
      content: mensagem,
    });
  };

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
         mutate={mutate}
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
      {contextHolder}
    </S.Container>
  );
}

export default ListaClientes;
