import React, { useContext } from 'react';
import ModalUpdateClient from './ModalUpdateClient';
import { fetchApi } from '../utils';
import { Context } from '../contexts/Context';

const { REACT_APP_CLIENTS_BASE_URL } = process.env;

function Client({ client, fetchData, toggleModal }) {
  const {
    setClientToUpdateName,
    setClientToUpdateEmail,
    setClientToUpdatePhoneNumber,
    setClientToUpdateCpf,
    setClientToUpdateAddress,
    setClientToUpdateId,
  } = useContext(Context);

  const { name, email, phoneNumber, address, cpf, _id } = client;

  async function handleDelete() {
    if (window.confirm('Deseja realmente excluir este cliente?')) {
      const result = await fetchApi.deleteOne(`${REACT_APP_CLIENTS_BASE_URL}/${_id}`);

      if (result) fetchData();
    }
  }

  function handleUpdate() {
    setClientToUpdateName(name);
    setClientToUpdateEmail(email);
    setClientToUpdatePhoneNumber(phoneNumber);
    setClientToUpdateCpf(cpf);
    setClientToUpdateAddress(address);
    setClientToUpdateId(_id);
    toggleModal('clients-modal-update');
  }

  return (
    <div className="client-section">
      <div className="client-info">
        <p>Nome: { name } </p>
        <p>E-mail: { email } </p>
        <p>Telefone: { phoneNumber } </p>
        <p>CPF: { cpf } </p>
        <p>Endereço: { address } </p>
      </div>
      <div className="client-buttons">
        <button type="button" onClick={ handleUpdate }>Atualizar</button>
        <button type="button" onClick={ handleDelete }>Excluir</button>
      </div>
    </div>
  );
}

export default Client;
