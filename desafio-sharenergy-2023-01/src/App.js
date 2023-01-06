import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import Homepage from './pages/Homepage/Homepage'
import LoginPage from './pages/LoginPage/LoginPage'
import StatusCodePage from './pages/StatusCodePage/StatusCodePage'
import RandomDogPage from './pages/RandomDogPage/RandomDogPage'
import ClientsListPage from './pages/ClientsListPage/ClientsListPage'

const App=()=>{
  return (
    <div>

      <GlobalStyle/>
      <ClientsListPage/>

    </div>
  )
}

export default App
