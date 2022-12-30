// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import IUser from "../../../../Interfaces/User";


function LoginForm () {
  const [form]= Form.useForm<IUser>()

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Usuário" >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} allowClear placeholder="Digite seu usuário" />
      </Form.Item>
      <Form.Item label="Senha">
        <Input type="password"  prefix={<LockOutlined className="site-form-item-icon" />} allowClear placeholder="Digite sua senha" />
      </Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
    </Form>
  )
}

export default LoginForm