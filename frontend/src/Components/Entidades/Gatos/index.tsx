/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState } from 'react';
import { Image, Input } from 'antd';
import qs from "qs"
import useSWR from 'swr'
import servico from "../../../services/Gatos/index"
import S from "../../Container/index"


function BuscaGatos() {
  const [statusCode, setStatusCode] = useState({
    status: 0
  });
  const { data : dados, error, isLoading, mutate } =
  useSWR(`gatos?${qs.stringify(statusCode)}`, () =>  servico.buscar(statusCode))


  function handleBusca(status : string){
    if(status.length >= 3){
    setStatusCode({
     status : Number(status)
    })
    mutate()
    }
  }
  return(
  <S.ContainerBloco>
    <h1>Pesquise um status :</h1>
    <Input style={{width:"300px", marginBottom:"30px", marginTop:"20px"}} onChange={(e)=>{handleBusca(e.target.value)}}/>
     <Image
      loading={"eager"}
       width={350}
       src={`data:image/jpg;base64,${dados?.resposta}`}
       />
  </S.ContainerBloco>
);
}

export default BuscaGatos;


