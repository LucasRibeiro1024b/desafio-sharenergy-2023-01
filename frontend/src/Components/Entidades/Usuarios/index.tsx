/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { IDadosTabela } from "../../../Interfaces/Cliente";
import Usuarios from "../../../Interfaces/Usuarios";
import Tabela from "../../Tabela/Index";
import colunasTabela from "./lista/colunas";
import servico from "../../../services/pegarUsuarios/index"
import useSWR from 'swr'
import { Avatar, Button, List, Skeleton } from "antd";
import Item from "antd/es/list/Item";


function ListaUsuarios () {
const [linhaTabela , setLinhaTabela] = useState<IDadosTabela<Usuarios>>();
const [dados , setDados] = useState<any[]>([])
const [loading, setLoading] = useState(false);
/* const { data : dados, error, isLoading } =
 useSWR('usuarios', async ()=> await servico.buscarTodos())
 */
  function pegarDadosLinha(value : Usuarios, visivel : boolean){
    setLinhaTabela({
      cliente : value,
      visivel : visivel
    })
  }



  useEffect(()=>{
    const resultado = servico.buscarTodos()
    .then(res => {setDados(res?.dados)});

  }, [])

  const loadMore =
   !loading ? (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button onClick={()=>pegarDadosLinha}>loading more</Button>
    </div>
  ) : null;

  return(
    <List
      className="demo-loadmore-list"
      loading={loading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={dados}
       renderItem={(item) => (
        <List.Item
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.photo} />}
              title={<a href="https://ant.design">{item.name}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>{}</div>
          </Skeleton>
        </List.Item>
      )}
    />
  )
}


export default ListaUsuarios