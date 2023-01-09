/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Checkbox, Form, Input, message, Space } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import IUser from '../../../../Interfaces/User';
import Botao from '../../../Button';
import Titulo from '../../../Titulo';
import S from '../../../Container/index';
import servico from '../../../../services/login/login';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [form] = Form.useForm<IUser>();
  const [messageApi, contextHolder] = message.useMessage()
  function handleClick() {
    form
      .validateFields()
      .then(async () => {
        const login: IUser = form.getFieldsValue();
        const resposta = await servico.logar({ nome: login.nome, senha: login.senha });
        navigate('/usuarios');
      })
      .catch(err => {
        console.log(err);
      });
  }
  const error = (mensagem : string) => {
    messageApi.open({
      type: 'error',
      content: mensagem,
    });
  };

  return (
    <S.ContainerBloco>
      <Titulo>Faça Login</Titulo>
      <Form form={form} layout="vertical">
        <Form.Item
          name="nome"
          label="Usuário"
          rules={[
            {
              required: true,
              message: 'Campo é obrigatório'
            }
          ]}
          required
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Digite seu usuário"
          />
        </Form.Item>
        <Form.Item
          name="senha"
          label="Senha"
          rules={[
            {
              required: true,
              message: 'Campo é obrigatório'
            }
          ]}
          required
        >
          <Input
            style={{ width: '100%', height: '20%' }}
            type="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Digite sua senha"
          />
        </Form.Item>
        <Space direction="vertical">
          <Form.Item name="checked" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Botao handleClick={handleClick} textoBotao="Enviar" />
        </Space>
      </Form>
      {contextHolder}
    </S.ContainerBloco>
  );
}

export default LoginForm;
