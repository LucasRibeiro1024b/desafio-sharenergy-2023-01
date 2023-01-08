// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Button } from './style';

interface IBotao {
  handleClick: () => void;
  textoBotao: string;
}

function Botao({ handleClick, textoBotao, ...rest }: IBotao) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <Button type="primary" onClick={handleClick} {...rest}>
      {textoBotao}
    </Button>
  );
}

export default Botao;
