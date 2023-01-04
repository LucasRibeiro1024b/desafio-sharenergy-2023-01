
import { Button} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ICliente, IDadosTabela } from '../../../../../Interfaces/Cliente';
import Usuarios from '../../../../../Interfaces/Usuarios';


interface Colunas {
  pegarDadosLinha : ( value : ICliente, visivel : boolean) => void | any,
  linhaTabela ?: IDadosTabela<Usuarios>
}

  export const colunasTabela = ({pegarDadosLinha, linhaTabela} : Colunas) =>{
  const colunas : ColumnsType<ICliente> = [
     {
       title: 'Descrição',
       dataIndex: 'nome',
       width: '25%',
       key :"nome",
       sorter : true,
       align: 'center'
     },
     {
       title: 'A',
       dataIndex: 'valorA',
       width: '40%',
       key : "valorA",
       sorter : true,
       align: 'center'
     },
     {
       title: 'B',
       dataIndex: 'valorB',
       width: '40%',
       key: "valorB",
       sorter : true,
       align: 'center'
     },
     {
       title: 'Ação',
        dataIndex: 'acao',
       shouldCellUpdate: (record: ICliente) =>{ return record.id === linhaTabela?.cliente?.id},
       render: (value, record : ICliente, index ) => (
       <Button type="primary"
       onClick={() => pegarDadosLinha(record, true)}>Selecionar
       </Button>),
       align: 'center',
     },

   ]
   return colunas
  }