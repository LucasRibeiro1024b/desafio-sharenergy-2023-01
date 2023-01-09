/*eslint-disable-next-file*/
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
  fecharModal : () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Inputs {
  telefone ?: string
  cpf ?:string
}

function FormCadastro({ dados, visivel, setVisivel, fecharModal }: IFormCadastro) {
  const [form] = useForm<ICliente>();

  const inicialRender = useCallback(() => {
  if(dados){
      form.setFieldsValue({...dados,
        endereco :{
          bairro : dados?.endereco?.bairro,
          cidade : dados?.endereco?.cidade,
          rua : dados?.endereco?.rua
        }

      });
  }
    form.resetFields();
  }, [dados, form]);

  useEffect(() => {
    inicialRender();
  }, [inicialRender]);


useEffect(() =>{
    form.setFieldsValue({...dados,
      endereco :{
        bairro : dados?.endereco?.bairro,
        cidade : dados?.endereco?.cidade,
        rua : dados?.endereco?.rua
      }

    })
  }, [dados, form])

  function salvarDados() {
    form.validateFields().then(async () => {
      const dados : ICliente = form.getFieldsValue();
      const resultado = await servico.salvar(dados);
      if(resultado){
        fecharModal()
      }
    });
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
        name ={"formulario-cliente"}
      >
        <Form.Item name="nome" label="Nome :" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['email']} label="Email :" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={'telefone'} label="Telefone :">
          <Input
            name='telefone'
            maxLength={15}
          />
        </Form.Item>
        <Form.Item name={['cpf']} label="CPF :">
          <Input
           name='cpf'
           maxLength={15}
          />
        </Form.Item>
        <Form.Item name={['endereco','cidade']} label="Cidade :">
          <Input />
        </Form.Item>
        <Form.Item name={['endereco','bairro']} label="Bairro :">
          <Input />
        </Form.Item>
        <Form.Item name={['endereco','rua']} label="Rua :">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default FormCadastro;
