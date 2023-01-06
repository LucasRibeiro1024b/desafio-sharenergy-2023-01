import { Button } from "antd";
import { ColumnType } from "antd/es/table";
import { Avatar} from 'antd';
import { ICliente, IDadosTabela } from "../../../../Interfaces/Cliente";

interface Colunas {
  pegarDadosLinha : ( value : ICliente, visivel : boolean) => void | any,
  linhaTabela ?: IDadosTabela<ICliente>
}


const  ColunasTabela = ({pegarDadosLinha, linhaTabela} : Colunas)=>{

  const colunas : ColumnType<ICliente> | any = [
    {
      title: 'Nome Usuario',
      dataIndex: 'name',
      width: '25%',
      key :"name",
      sorter : true,
      align: 'center'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '25%',
      key :"email",
      sorter : true,
      align: 'center'
    },
    {
      title: 'Login',
      dataIndex: 'login',
      width: '25%',
      key :"login",
      sorter : true,
      align: 'center'
    },
    {
      title: 'Idade',
      dataIndex: 'age',
      width: '25%',
      key :"age",
      sorter : true,
      align: 'center'
    },
    {
      title: 'Foto',
      dataIndex: 'photo',
      width: '25%',
      key :"photo",
      sorter : true,
      align: 'center',
      render: (value : any, record : any) =>{
        <Avatar src={value}/>
      }
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
