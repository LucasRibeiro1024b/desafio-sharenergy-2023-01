import ListaClientes from '../Components/Entidades/Clientes';
import LayoutGeral from '../Components/Layout';

function Clientes() {
  return (
    <LayoutGeral header="block">
      <ListaClientes />
    </LayoutGeral>
  );
}

export default Clientes;
