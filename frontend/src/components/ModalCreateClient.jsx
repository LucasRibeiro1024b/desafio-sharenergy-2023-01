import React, { useState } from 'react';
import { fetchApi } from '../utils';

const { REACT_APP_CLIENTS_BASE_URL } = process.env;

function ModalCreateClient({ toggleModal, fetchData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [invalidData, setInvalidData] = useState(false);

  async function handleClick() {
    const data = { name, email, phoneNumber, cpf, address };
    const result = await fetchApi.post(REACT_APP_CLIENTS_BASE_URL, data);

    if (result) {
      setInvalidData(false);
      fetchData();
      toggleModal('clients-modal-create');
      setName('');
      setEmail('');
      setPhoneNumber('');
      setCpf('');
      setAddress('');
    } else {
      setInvalidData(true);
    }
  }

  function isNum(value) {
    return (/^[0-9]*$/).test(value);
  }

  return (
    <section id="clients-modal-create" style={{ display: 'none' }}>
      <div id="clients-modal-create-content">
        { invalidData && <h3>Dados incompletos ou inválidos</h3> }
        <div>
          <p>Nome:</p>
          <input
            type="text"
            placeholder="Gabriel Pinheiro Matiucci"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </div>
        <div>
          <p>E-mail:</p>
          <input
            type="text"
            placeholder="gabriel_1505@outlook.com" 
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </div>
        <div>
          <p>Telefone:</p>
          <input
            type="text"
            maxLength="11"
            placeholder="13997060349"
            value={ phoneNumber }
            onChange={
              ({ target: { value } }) => isNum(value) && setPhoneNumber(value)
            }
          />
        </div>
        <div>
          <p>CPF:</p>
          <input
            type="text"
            maxLength="11"
            placeholder="21365985564"
            value={ cpf }
            onChange={
              ({ target: { value } }) => isNum(value) && setCpf(value)
            }
          />
        </div>
        <div>
          <p>Endereço:</p>
          <input
            type="text"
            placeholder="Rua Frei Gaspar, 22, Centro, São Vicente/SP"
            value={ address }
            onChange={ ({ target }) => setAddress(target.value) }
          />
        </div>
        <div id="clients-modal-create-content-buttons">
          <button onClick={ handleClick }>Adicionar</button>
          <button
            onClick={ () => toggleModal('clients-modal-create') }
          >
            Cancelar
          </button>
        </div>
      </div>
    </section>
  );
}

export default ModalCreateClient;
