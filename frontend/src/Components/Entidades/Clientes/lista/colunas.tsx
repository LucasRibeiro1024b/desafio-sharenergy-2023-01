import { Button } from "antd";
import { ColumnType } from "antd/es/table";
import { ICliente, IDadosTabela } from "../../../../Interfaces/Cliente";

interface Colunas {
  pegarDadosLinha : ( value : ICliente, visivel : boolean) => void | any,
  linhaTabela ?: IDadosTabela<ICliente>
}


const  ColunasTabela = ({pegarDadosLinha, linhaTabela} : Colunas)=>{

  const colunas : ColumnType<ICliente> | any = [
    {
      title: 'Nome Usuario',
      dataIndex: 'nome',
      width: '25%',
      key :"nome",
      align: 'center'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '25%',
      key :"email",
      align: 'center'
    },
    {
      title: 'Telefone',
      dataIndex: 'telefone',
      width: '25%',
      key :"telefone",
      align: 'center'
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      width: '25%',
      key :"cpf",
      align: 'center'
    },
    {
      title: 'Ação',
      width: '25%',
      dataIndex: 'acao',
      shouldCellUpdate: (record: any) =>{ return record.id === linhaTabela?.cliente?.id},
      render: (value : any, record : any) => (
      <Button type="primary"
      onClick={() => pegarDadosLinha(record, true)}>Selecionar
      </Button>),
      align: 'center',
    },
  ]

 return colunas

}


export default ColunasTabela
