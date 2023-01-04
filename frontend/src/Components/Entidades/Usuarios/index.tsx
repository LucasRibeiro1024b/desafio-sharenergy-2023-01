/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { IDadosTabela } from "../../../Interfaces/Cliente";
import Usuarios from "../../../Interfaces/Usuarios";
import Tabela from "../../Tabela/Index";
import colunasTabela from "./lista/colunas";
import servico from "../../../services/pegarUsuarios/index"
import useSWR from 'swr'
import { Avatar, Button, Divider, List, Skeleton } from "antd";
import Item from "antd/es/list/Item";
import InfiniteScroll from 'react-infinite-scroll-component';


function ListaUsuarios () {
const [linhaTabela , setLinhaTabela] = useState<IDadosTabela<Usuarios>>();


 const { data : dados, error, isLoading, mutate } =
 useSWR('usuarios', async ()=> await servico.buscarTodos())


  const loadMoreData = () => {
    if (isLoading) {
      return;
    }
    mutate()
  }


  return(
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
    <InfiniteScroll
    dataLength={dados?.dados ? dados.dados.length : []}
    next={loadMoreData}
    hasMore={dados?.dados.length < 5}
    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
    scrollableTarget="scrollableDiv"
  >
    <List
      className="demo-loadmore-list"
      loading={isLoading}
      itemLayout="horizontal"
      loadMore={isLoading}
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
    </InfiniteScroll>
    </div>
  )
}


export default ListaUsuarios