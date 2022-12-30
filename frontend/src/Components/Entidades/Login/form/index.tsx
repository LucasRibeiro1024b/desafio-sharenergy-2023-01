// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Form, Input } from "antd";
import IUser from "../../../../Interfaces/User";


function LoginForm () {
  const [form]= Form.useForm<IUser>()

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Usuário">
        <Input placeholder="Digite seu usuário" />
      </Form.Item>
      <Form.Item label="Senha">
        <Input placeholder="Digite sua senha" />
      </Form.Item>
    </Form>
  )
}

export default LoginForm