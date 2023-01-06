/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import useSWR from 'swr'
import { Avatar,Divider,List, Skeleton, Space } from "antd";
import qs from 'qs'
import Usuarios from "../../../Interfaces/Usuarios";
import servico from "../../../services/Usuarios/index"
import S from "../../Container/index"


function ListaUsuarios () {
const [paginacao, setPaginacao] = useState({
  page : 1,
  resultado : 10
})

 const { data : dados, error, isLoading, mutate } =
 useSWR(`usuarios?${qs.stringify(paginacao)}`, async ()=> await servico.buscarTodos(paginacao))

  return(
    <S.Container>
    <List
      className="lista-usuarios"
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
        <List.Item>
          <Skeleton avatar title={true} loading={isLoading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.photo} />}
              title={<a href="/">{item.name}</a>}
              description={<>
               <Space direction="horizontal">
                  Email:{item.email}
                  <Divider type="vertical" />
                  Username: {item.login}
                  <Divider type="vertical" />
                  Idade : {item.age}
                  </Space>
              </>}
            />
          </Skeleton>
        </List.Item>
      )}
    />
    </S.Container>
  )
}


export default ListaUsuarios
