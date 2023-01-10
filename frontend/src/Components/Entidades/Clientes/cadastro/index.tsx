/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/*eslint-disable-next-file*/
import { Alert, Form, Input, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ICliente } from '../../../../Interfaces/Cliente';
import Modal from '../../../Modal';
import servico from '../../../../services/Clientes/index';
import ContextoCliente from '../../../../services/Clientes/contexto/ContextoCliente';

interface IFormCadastro {
  dados: ICliente;
  visivel: boolean;
  setVisivel: any;
  fecharModal : () => void
  mutate :() => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Inputs {
  telefone ?: string
  cpf ?:string
}

interface Erros {
  campo : string
  mensagem : string
}

function FormCadastro({ dados, visivel, setVisivel, fecharModal, mutate  }: IFormCadastro) {
  const [form] = useForm<ICliente>();
  const [messageApi, contextHolder] = message.useMessage()
  const {atualizarDados, clientes} = useContext(ContextoCliente)
  const [erros , setErros] = useState<Erros[]>()

  const inicialRender = useCallback(() => {
  if(form){
    atualizarDados()
    if(dados){
      form.setFieldsValue({...dados,
        endereco :{
          bairro : dados?.endereco?.bairro,
          cidade : dados?.endereco?.cidade,
          rua : dados?.endereco?.rua
        }
      });
   }
  }
   form.resetFields();
}, [dados, form]);

  useEffect(() => {
    inicialRender();
    atualizarDados();
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
      const cliente : ICliente = await form.getFieldsValue(true);
      const resultado = await servico.salvar({...cliente});
      if(resultado.comando.id){
        atualizarDados()
        limparForm()
        success(resultado.comando.mensagem)
        mutate()
      }
       if(resultado.comando.erros?.length){
        setErros(resultado.comando.erros)
       error(resultado.comando.mensagem)
      }
    });
  }

  function limparForm (){
    setVisivel(false)
     form.resetFields()
  }

  const success = (mensagem : string) => {
    messageApi.open({
      type: 'success',
      content: mensagem,
    });
  };

  const error = (mensagem : string) => {
    messageApi.open({
      type: 'error',
      content: mensagem,
    });
  };

  return (
    <>
    <Modal
      title={<h2 style={{ marginBottom: '20px' }}>Cadastro de clientes:</h2>}
      handleOk={salvarDados}
      visivel={visivel}
      handleCancel={fecharModal}
    >
    <>
      <Form<ICliente>
        form={form}
        layout={'vertical'}
        name ={"formulario-cliente"}
      >
        <Form.Item
          name="nome"
          label="Nome:"
          rules={[{required: true , message: "Campo obrigatório"}]}
          >
          <Input />
        </Form.Item>
        <Form.Item
          name={['email']}
          label="Email:"
          rules={[{required: true, message: "Campo obrigatório" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={'telefone'}
          label="Telefone:"
          rules={[{required: true, message: "Campo obrigatório"}]}
          >
          <Input
            name='telefone'
            maxLength={11}
          />
        </Form.Item>
        <Form.Item
          name={['cpf']}
          label="CPF:"
          rules={[{required: true, message: "Campo obrigatório"}]}
          >
          <Input
           name='cpf'
           maxLength={11}
          />
        </Form.Item>
        <Form.Item name={['endereco','cidade']} label="Cidade:">
          <Input />
        </Form.Item>
        <Form.Item name={['endereco','bairro']} label="Bairro:">
          <Input />
        </Form.Item>
        <Form.Item name={['endereco','rua']} label="Rua:">
          <Input />
        </Form.Item>
      </Form>
      </>
    </Modal>
    {contextHolder}
  </>
  );
}

export default FormCadastro;
