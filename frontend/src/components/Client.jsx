import React from 'react';
import { fetchApi } from '../utils';
const { REACT_APP_CLIENTS_BASE_URL } = process.env;

function Client({ client, fetchData }) {
  const { name, email, phoneNumber, address, cpf, _id } = client;

  async function handleDelete() {
    if (window.confirm('Deseja realmente excluir este cliente?')) {
      const result = await fetchApi.deleteOne(`${REACT_APP_CLIENTS_BASE_URL}/${_id}`);

      if (result) fetchData();
    }
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
        <button type="button">Atualizar</button>
        <button type="button" onClick={ handleDelete }>Excluir</button>
      </div>
    </div>
  );
}

export default Client;
