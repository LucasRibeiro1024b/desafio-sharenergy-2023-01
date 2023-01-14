import React, { useState } from "react"
import GlobalContext from "../context/GlobalContext"

const GlobalState = ({children})=>{

    return (
        <GlobalContext.Provider value={{reload, setReload}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState