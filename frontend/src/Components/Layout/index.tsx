import React from 'react';
import { Layout} from 'antd';
//import PageLogin from '../Entidades/Login';
import LoginForm from '../Entidades/Login/form';

const { Header, Content, Footer} = Layout;


function LayoutGeral () {


  return (
    <Layout>
      <Header className="header">
      </Header>
      <Content style={{padding: '50px 50px', margin:"100px 50px", backgroundColor:"blue"}}>
        <LoginForm/>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor:"red", alignItems:"end" }}>©2023 Created by Rafael Carlos De Souza</Footer>
    </Layout>
  );
};

export default LayoutGeral;