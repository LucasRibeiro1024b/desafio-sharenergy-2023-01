// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "antd";

interface IBotao {
  handleClick : () => void
  textoBotao : string
}

function Botao ({handleClick, textoBotao}: IBotao){



  return <Button onClick={handleClick}>{textoBotao}</Button>


}


export default Botao;