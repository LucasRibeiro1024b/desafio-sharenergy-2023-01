import React, { createContext, useState } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  const [logged, setLogged] = useState(false);
  const [clientToUpdateName, setClientToUpdateName] = useState('');
  const [clientToUpdateEmail, setClientToUpdateEmail] = useState('');
  const [clientToUpdatePhoneNumber, setClientToUpdatePhoneNumber] = useState('');
  const [clientToUpdateCpf, setClientToUpdateCpf] = useState('');
  const [clientToUpdateAddress, setClientToUpdateAddress] = useState('');
  const [clientToUpdateId, setClientToUpdateId] = useState('');

  const myContext = {
    logged,
    setLogged,
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
    setClientToUpdateId,
  };

  return (
    <Context.Provider value={ myContext }>
      { children }
    </Context.Provider>
  );
}

export { ContextProvider, Context };
