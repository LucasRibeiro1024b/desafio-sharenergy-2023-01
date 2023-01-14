import React, { useState } from "react"
import GlobalContext from "../context/GlobalContext"
import useRequestData from "../hooks/useRequestData"

const GlobalState = ({children})=>{

    const [dataClients, errorClients, isLoadingClients, reload, setReload] = useRequestData("https://desafio-sharenergy-2023-01-hol7.onrender.com/clients")

    return (
        <GlobalContext.Provider value={{dataClients, errorClients, isLoadingClients, reload, setReload}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState