import React from 'react';

function Client({ client }) {
  const { name, email, phoneNumber, address, cpf, _id } = client;

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
        <button type="button">Excluir</button>
      </div>
    </div>
  );
}

export default Client;
