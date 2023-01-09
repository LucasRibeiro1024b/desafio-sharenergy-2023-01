/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { ICliente } from "../../../Interfaces/Cliente";
import servico from "../index"


interface IContextoCliente {
  clientes ?: Array<ICliente>
  atualizarDados : () => void
}

interface IClienteProvider {
  children : React.ReactNode
}

const defaultValueCliente :IContextoCliente = {
  clientes : [],
  atualizarDados : () => null
}

const ContextoCliente = createContext<IContextoCliente>(defaultValueCliente)


function ClienteProvider ({ children }: IClienteProvider) {
  const [clientes, setClientes] = useState<Array<ICliente> | undefined>([])

  function atualizarDados(){
    pegarDados()
  }

 async function pegarDados(){
   const busca = await servico.buscar()
   if(busca?.comando.dados) setClientes(busca?.comando.dados)
  }

  useEffect(() => {
    pegarDados();
  });


  return (
    <ContextoCliente.Provider value={{clientes, atualizarDados }}>
      {children}
    </ContextoCliente.Provider>
  )

}


export default ContextoCliente
