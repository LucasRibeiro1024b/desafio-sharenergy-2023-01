import React from 'react';

function ModalCreateClient({ toggleModal }) {
  return (
    <section id="clients-modal-create" style={{ display: 'none' }}>
      <div id="clients-modal-create-content">
        <div>
          <p>Nome:</p>
          <input type="text" />
        </div>
        <div>
          <p>E-mail:</p>
          <input type="text" />
        </div>
        <div>
          <p>Telefone:</p>
          <input type="text" maxLength=''/>
        </div>
        <div>
          <p>CPF:</p>
          <input type="text" />
        </div>
        <div>
          <p>Endereço:</p>
          <input type="text" />
        </div>
        <div id="clients-modal-create-content-buttons">
          <button onClick={ () => toggleModal() }>Adicionar</button>
          <button onClick={ () => toggleModal() }>Cancelar</button>
        </div>
      </div>
    </section>
  );
}

export default ModalCreateClient;
