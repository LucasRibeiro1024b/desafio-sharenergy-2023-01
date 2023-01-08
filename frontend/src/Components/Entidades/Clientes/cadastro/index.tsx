/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useCallback, useEffect } from 'react';
import { ICliente } from '../../../../Interfaces/Cliente';
import Modal from '../../../Modal';
import servico from '../../../../services/Clientes/index';

interface IFormCadastro {
  dados: ICliente;
  visivel: boolean;
  setVisivel: any;
}

function FormCadastro({ dados, visivel, setVisivel }: IFormCadastro) {
  const [form] = useForm<ICliente>();

  const inicialRender = useCallback(() => {
  if(dados){
    if (form) {
      form.setFieldsValue({...dados,
        endereco: {
          bairro : dados?.endereco?.bairro
        }
      });
    }
  }
    form.resetFields();
  }, [dados, form]);

  console.log(dados)
  useEffect(() => {
    inicialRender();
  }, [inicialRender]);


  useEffect(() =>{
    form.setFieldsValue({
      ...dados,
      endereco :{
         bairro : dados?.endereco?.bairro,
         cidade : dados?.endereco?.cidade,
         rua : dados?.endereco?.rua
      }
    })
  }, [ dados])

  function salvarDados() {
    form.validateFields().then(async () => {
      const dados : ICliente = form.getFieldsValue();
      const resultado = await servico.salvar(dados);
      if(resultado){
        fecharModal()
      }
    });
  }


  function fecharModal() {
    setVisivel(false);
    form.resetFields();
  }

  return (
    <Modal
      title={<h2 style={{ marginBottom: '20px' }}>Cadastro de clientes:</h2>}
      handleOk={salvarDados}
      visivel={visivel}
      handleCancel={fecharModal}
    >
      <Form<ICliente>
        form={form}
        layout={'vertical'}
/*          initialValues={{
          nome: dados?.nome,
          email: dados?.email,
          cpf: dados?.cpf,
          telefone: dados?.telefone,
          rua : dados?.endereco?.rua,
          cidade : dados?.endereco?.cidade,
          bairro : dados?.endereco?.bairro
        }} */
      >
        <Form.Item name="nome" label="Nome :" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={'email'} label="Email :" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={'telefone'} label="Telefone :">
          <Input />
        </Form.Item>
        <Form.Item name={['cpf']} label="CPF :">
          <Input />
        </Form.Item>
        <Form.Item name={['cidade']} label="Cidade :">
          <Input />
        </Form.Item>
        <Form.Item name={['bairro']} label="Bairro :">
          <Input />
        </Form.Item>
        <Form.Item name={['rua']} label="Rua :">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default FormCadastro;
