import ListaUsuarios from '../Components/Entidades/Usuarios';
import LayoutGeral from '../Components/Layout';

function Usuarios() {
  return (
    <LayoutGeral header="block">
      <ListaUsuarios />
    </LayoutGeral>
  );
}

export default Usuarios;
