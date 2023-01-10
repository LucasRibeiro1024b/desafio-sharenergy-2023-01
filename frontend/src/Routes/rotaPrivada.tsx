/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, Outlet } from 'react-router-dom';
import services from '../services/Token';
interface IRotasPrivadas {
  estaAutenticado: string;
}

function RotasPrivadas() {
  const estaAutenticadoStorage = services.pegarStorage();
  const estaAutenticadoSessao = services.pegarSession();
  return estaAutenticadoStorage === true || estaAutenticadoSessao === true ? <Outlet /> : <Navigate to={'/'} />;
}

export default RotasPrivadas;
