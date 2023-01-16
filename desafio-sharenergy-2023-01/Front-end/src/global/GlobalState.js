import GlobalContext from "../context/GlobalContext"

const GlobalState = ({children})=>{

    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState