import { Layout,Space } from "antd";
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {  NavLink } from "react-router-dom";

const { Header, Content, Footer} = Layout;

interface ILayoutGeral{
  children ?: ReactJSXElement
  header ?: string
}
function LayoutGeral ({children, header} : ILayoutGeral) {

  return (
    <Layout>
      <Header className="header" style={{display:header}}>
      <Space>
        <NavLink to="/usuarios"> Usuarios </NavLink>
        <NavLink to="/gatos"> Gatos </NavLink>
        <NavLink to="/clientes"> Clientes </NavLink>
      </Space>
      </Header>
      <Content style={{padding: '50px 50px'}}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center', alignItems:"end" }}>©2023 Created by Rafael Carlos De Souza</Footer>
    </Layout>
  );
};

export default LayoutGeral;
