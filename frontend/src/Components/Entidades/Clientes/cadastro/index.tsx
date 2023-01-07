
import { Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useCallback, useEffect, useState } from "react";
import { ICliente } from "../../../../Interfaces/Cliente";
import Modal from "../../../Modal";
import servico from "../../../../services/Clientes/index"

interface IFormCadastro {
  dados : ICliente,
  visivel : boolean
  setVisivel :  any
}


function FormCadastro({dados, visivel, setVisivel }: IFormCadastro)  {
  const [form] = useForm();

  const inicialRender = useCallback(()=>{
    if(form){
      form.setFieldsValue({...dados})
    }
    form.resetFields()
  },[dados, form])

  useEffect(()=>{
    inicialRender()
  },[inicialRender])

  function salvarDados(){
    form.validateFields().then( async()=>{
     const dados = form.getFieldsValue()
     const resultado = await servico.salvar(dados)
     console.log(resultado)
    })
  }

  function fecharModal(){
    setVisivel(false)
    form.resetFields()
  }

  return (
  <Modal
  title={<h2 style={{marginBottom:"20px"}} >
    Cadastro de clientes:</h2>}
   handleOk={salvarDados}
   visivel={visivel}
   handleCancel={fecharModal}
   >
    <Form
     form={form}
     layout={'vertical'}
     initialValues={{
      nome : dados?.nome,
      email : dados?.email,
      cpf : dados?.cpf,
      telefone : dados?.telefone

     }}
    >
      <Form.Item
        name="nome"
        label="Nome :"
        rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={'email'}
        label="Email :"
        rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={'telefone'}
        label="Telefone :"
        >
        <Input/>
      </Form.Item>
      <Form.Item
      name={['cpf']}
      label="CPF :">
        <Input />
      </Form.Item>
      <Form.Item
        name={['endereco', 'cidade']}
        label="Cidade :">
        <Input/>
      </Form.Item>
      <Form.Item
        name={['endereco', 'bairro']}
        label="Bairro :">
        <Input/>
      </Form.Item>
      <Form.Item
        name={['endereco', 'rua']}
        label="Rua :">
        <Input/>
      </Form.Item>
    </Form>
  </Modal>
  );
};

export default FormCadastro;
