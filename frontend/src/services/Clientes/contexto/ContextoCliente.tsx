/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { ICliente } from "../../../Interfaces/Cliente";
import servico from "../index"


interface IContextoCliente {
  clientes ?: ICliente[]
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


export function ClienteProvider ({ children }: IClienteProvider) {
  const [clientes, setClientes] = useState<ICliente[] | undefined>()

 async function atualizarDados(){
   await  pegarDados()
  }

 async function pegarDados(){
   const busca = await servico.buscar()
    setClientes(busca.comando.dados)
  }

  useEffect(() => {
    pegarDados();
  },[clientes]);


  return (
    <ContextoCliente.Provider value={{clientes, atualizarDados }}>
      {children}
    </ContextoCliente.Provider>
  )

}


export default ContextoCliente
