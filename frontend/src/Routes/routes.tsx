// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clientes from '../Pages/Clientes';
import Dogs from '../Pages/Dogs';
import Gatos from '../Pages/Gatos';
import Home from '../Pages/Home';
import NaoExiste from '../Pages/NaoExiste';
import Usuarios from '../Pages/Usuarios';
import services from '../services/Token';
import RotasPrivadas from './rotaPrivada';

function Rotas() {
  const session = () => services.pegarSession();
  const local = () => services.pegarStorage();
  useEffect(() => {
    session();
    local();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NaoExiste />} />
        <Route element={<RotasPrivadas />}>
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/gatos" element={<Gatos />} />
          <Route path="/dogs" element={<Dogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
