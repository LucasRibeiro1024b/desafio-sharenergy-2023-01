/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import { Image, Button, Space } from 'antd';
import { useEffect, useState } from "react"
import S from "../../Container"

const urlDog = "https://random.dog/woof.json?filter=mp4,webm"

const api = axios.create({
  baseURL : urlDog
})

interface Retorno {
  fileSizeBytes : number,
  url : string
}
function BuscarDog(){
  const [imagem , setImage]= useState<Retorno>()

 async function buscarDogs() {
  api.get("")
  .then(res =>{
    setImage(res.data)
  })
  .catch(err => console.error(err))
 }

  return(
  <S.ContainerBloco>
    <Space direction="vertical">
    <S.ContainerImagem>
      {imagem && imagem?.url ? (
      <Image
      style={{ maxWidth: "100%",height: "auto"}}
      width={180}
      src={imagem?.url}
      />
      ): <h2>Cadê??</h2>}
    </S.ContainerImagem>
      <S.ContainerButton>
        <Button type="primary" onClick={buscarDogs}>Buscar</Button>
      </S.ContainerButton>
    </Space>
  </S.ContainerBloco>
)
}


export default BuscarDog;
