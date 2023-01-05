/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { IDadosTabela } from "../../../Interfaces/Cliente";
import Usuarios from "../../../Interfaces/Usuarios";

import servico from "../../../services/pegarUsuarios/index"
import useSWR from 'swr'
import { Avatar,List, Skeleton } from "antd";
import qs from 'qs'

function ListaUsuarios () {
const [paginacao, setPaginacao] = useState({
  page : 1,
  resultado : 10
})

 const { data : dados, error, isLoading, mutate } =
 useSWR(`usuarios?${qs.stringify(paginacao)}`, async ()=> await servico.buscarTodos(paginacao))

  return(
    <List
      className="demo-loadmore-list"
      loading={isLoading}
      itemLayout="horizontal"
      loadMore={isLoading}
      pagination={{
        onChange: (page, pageSize) => {
          setPaginacao({
            page,
            resultado: pageSize
          });
        },
        pageSize: paginacao.resultado,
        total:500
      }}
      dataSource={dados?.dados as Usuarios[]}
       renderItem={(item) => (
        <List.Item
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={isLoading} active>
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