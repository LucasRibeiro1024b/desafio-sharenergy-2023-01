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


function ListaClientes() {
  const [linhaTabela, setLinhaTabela] = useState<IDadosTabela<any>>({
    visivel: false,
    cliente: null
  });
  const [visivel, setVisivel] = useState<boolean>(false);
  const [page, setPage] = useState<IPaginacao>();
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination:{
      current: 1
    }
  });
  const [dadosForm , setDadosForm] = useState<ICliente>()

  const {
    data: dados,
    isLoading,
    mutate
  } = useSWR(`clientes${qs.stringify(page)}`, async () => servicos.buscar(page));

  useEffect(() => {
    setTableParams({
      pagination: {
        current: dados?.comando.paginacao.skip,
        pageSize: dados?.comando.paginacao.take,
        total: dados?.comando.paginacao.total
      }
    });
  }, [dados]);

  function handleTableChange(pag: TablePaginationConfig) {
    setPage({
      skip: Number(pag.current) ? Number(pag.current) : 1,
      take: Number(pag.pageSize)
    });
    mutate();
  }

  function pegarDadosLinha(value: ICliente, visivel: boolean) {
    setLinhaTabela({ cliente: value, visivel: visivel });
    setVisivel(true);
    mutate();
  }


  useEffect(()=>{
    setDadosForm(linhaTabela?.cliente as ICliente)
  },[linhaTabela])

  function deletarDadosLinha(value: ICliente, visivel: boolean) {
    setLinhaTabela({ cliente: value, visivel: visivel });
    const deletar = servico.deletar(value?.id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    setVisivel(true);
    mutate();
  }

  function abrirModal() {
    setVisivel(true);
    mutate();
  }

  return (
    <S.Container>
      <MenuTabela>
        <Button onClick={abrirModal}>Cadastrar Novo</Button>
      </MenuTabela>
      <Tabela
        dados={dados?.comando.dados}
        colunas={ColunasTabela({ pegarDadosLinha,linhaTabela, deletarDadosLinha })}
        pagination={tableParams?.pagination}
        loading={isLoading}
        onChange={handleTableChange}
      />
      <FormCadastro
         dados={dadosForm as ICliente}
         visivel={visivel}
         setVisivel={setVisivel}
        />
    </S.Container>
  );
}

export default ListaClientes;
