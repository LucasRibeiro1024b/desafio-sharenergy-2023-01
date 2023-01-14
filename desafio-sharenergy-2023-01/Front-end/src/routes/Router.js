import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from '../pages/LoginPage/LoginPage'
import Homepage from '../pages/Homepage/Homepage'
import RandomDogPage from '../pages/RandomDogPage/RandomDogPage'
import StatusCodePage from '../pages/StatusCodePage/StatusCodePage'
import ClientsListPage from '../pages/ClientsListPage/ClientsListPage'
import CreateClientPage from '../pages/CreateClientPage/CreateClientPage'
import ClientDetailsPage from '../pages/ClientDetailsPage/ClientDetailsPage'
import EditClientPage from '../pages/EditClientPage/EditClientPage'

export const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={localStorage.getItem("remember") === "remember" ? <Homepage/> : <LoginPage/>}></Route>
                <Route path="/home" element={<Homepage/>}></Route>               
                <Route path="/random-dog" element={<RandomDogPage/>}></Route>
                <Route path="/status-code" element={<StatusCodePage/>}></Route>
                <Route path="/clients" element={<ClientsListPage/>}></Route>
                <Route path="/create-client" element={<CreateClientPage/>}></Route>
                <Route path="/edit-client/:id" element={<EditClientPage/>}></Route>
                <Route path="/client-details/:id" element={<ClientDetailsPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}