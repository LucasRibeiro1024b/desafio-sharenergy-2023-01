import ListaUsuarios from "../Components/Entidades/Usuarios";
import LayoutGeral from "../Components/Layout";

function Usuarios () {
  return (
    <LayoutGeral header="none">
      <ListaUsuarios/>
    </LayoutGeral>
  )
}

export default Usuarios;