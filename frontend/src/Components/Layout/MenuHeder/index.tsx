import { Button } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import S from '../../Container';
function MenuHeader() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/');
  }

  return (
    <S.ContainerMenu>
      <NavLink to="/usuarios"> Usuarios </NavLink>
      <NavLink to="/gatos"> Gatos </NavLink>
      <NavLink to="/dogs"> Dogs </NavLink>
      <NavLink to="/clientes"> Clientes </NavLink>
      <Button danger type="primary" onClick={logout} children={'Logout'} />
    </S.ContainerMenu>
  );
}

export default MenuHeader;
