// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Checkbox, Form, Input, Space } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import IUser from "../../../../Interfaces/User";
import Botao from "../../../Button";
import Titulo from "../../../Titulo";
import S from "../../../Container/index"
import servico from "../../../../services/login/login";


function LoginForm () {
    const [form]= Form.useForm<IUser>()


  function handleClick (){
    form.validateFields().then(async ()=>{
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const login : IUser = form.getFieldsValue();
       // eslint-disable-next-line @typescript-eslint/no-unused-vars
       const resposta =  await servico.logar({nome: login.nome, senha: login.senha})
    }).catch(err =>{
      console.log(err)
    })
  }



  return (
  <S.ContainerBloco>
  <Titulo>Faça Login</Titulo>
    <Form
      form={form}
      layout="vertical"
    >
      <Form.Item
      name="nome"
      label="Usuário"
      rules={[{
        required : true,
        message : "Campo é obrigatório"
      }]} required>
        <Input
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="Digite seu usuário" />
      </Form.Item>
      <Form.Item
        name="senha"
        label="Senha"
        rules={[{
          required : true,
          message : "Campo é obrigatório"
        }]} required>
        <Input
         style={{width:"100%", height :"20%" }}
          type="password"
          prefix={<LockOutlined
          className="site-form-item-icon" />}
          placeholder="Digite sua senha"
        />
      </Form.Item>
        <Space direction="vertical">
        <Form.Item name="checked" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
          <Botao
            handleClick={handleClick}
            textoBotao="Enviar"
          />
        </Space>
    </Form>
    </S.ContainerBloco>
  )
}

export default LoginForm