import React, { createContext, useState } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  const [logged, setLogged] = useState(false);
  const myContext = { logged, setLogged };

  return (
    <Context.Provider value={ myContext }>
      { children }
    </Context.Provider>
  );
}

export { ContextProvider, Context };
