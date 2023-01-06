import React, { useState, useContext } from 'react';
import { Context } from '../contexts/Context';
import { fetchApi } from '../utils';

const { REACT_APP_CLIENTS_BASE_URL } = process.env;

function ModalUpdateClient({ toggleModal, fetchData }) {
  const {
    clientToUpdateName,
    setClientToUpdateName,
    clientToUpdateEmail,
    setClientToUpdateEmail,
    clientToUpdatePhoneNumber,
    setClientToUpdatePhoneNumber,
    clientToUpdateCpf,
    setClientToUpdateCpf,
    clientToUpdateAddress,
    setClientToUpdateAddress,
    clientToUpdateId,
  } = useContext(Context);

  const [invalidData, setInvalidData] = useState(false);

  async function handleClick() {
    const data = {
      name: clientToUpdateName,
      email: clientToUpdateEmail,
      phoneNumber: clientToUpdatePhoneNumber,
      cpf: clientToUpdateCpf,
      address: clientToUpdateAddress,
    };

    const result = await fetchApi
      .updateOne(`${REACT_APP_CLIENTS_BASE_URL}/${clientToUpdateId}`, data);

    if (result) {
      setInvalidData(false);
      fetchData();
      toggleModal('clients-modal-update');
    } else {
      setInvalidData(true);
    }
  }

  function isNum(value) {
    return (/^[0-9]*$/).test(value);
  }

  return (
    <section id="clients-modal-update" style={{ display: 'none' }}>
      <div id="clients-modal-update-content">
        { invalidData && <h3>Dados incompletos ou inválidos</h3> }
        <div>
          <p>Nome:</p>
          <input
            type="text"
            placeholder="Gabriel Pinheiro Matiucci"
            value={ clientToUpdateName }
            onChange={ ({ target }) => setClientToUpdateName(target.value) }
          />
        </div>
        <div>
          <p>E-mail:</p>
          <input
            type="text"
            placeholder="gabriel_1505@outlook.com" 
            value={ clientToUpdateEmail }
            onChange={ ({ target }) => setClientToUpdateEmail(target.value) }
          />
        </div>
        <div>
          <p>Telefone:</p>
          <input
            type="text"
            maxLength="11"
            placeholder="13997060349"
            value={ clientToUpdatePhoneNumber }
            onChange={
              ({ target: { value } }) => {
                if (isNum(value)) setClientToUpdatePhoneNumber(value);
              }
            }
          />
        </div>
        <div>
          <p>CPF:</p>
          <input
            type="text"
            maxLength="11"
            placeholder="21365985564"
            value={ clientToUpdateCpf }
            onChange={
              ({ target: { value } }) => {
                if (isNum(value)) setClientToUpdateCpf(value);
              }
            }
          />
        </div>
        <div>
          <p>Endereço:</p>
          <input
            type="text"
            placeholder="Rua Frei Gaspar, 22, Centro, São Vicente/SP"
            value={ clientToUpdateAddress }
            onChange={ ({ target }) => setClientToUpdateAddress(target.value) }
          />
        </div>
        <div id="clients-modal-update-content-buttons">
          <button onClick={ handleClick }>Atualizar</button>
          <button
            onClick={ () => toggleModal('clients-modal-update') }
          >
            Cancelar
          </button>
        </div>
      </div>
    </section>
  );
}

export default ModalUpdateClient;
