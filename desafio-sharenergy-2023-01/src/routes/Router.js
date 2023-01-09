import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from '../pages/LoginPage/LoginPage'
import Homepage from '../pages/Homepage/Homepage'
import RandomDogPage from '../pages/RandomDogPage/RandomDogPage'
import StatusCodePage from '../pages/StatusCodePage/StatusCodePage'
import ClientsListPage from '../pages/ClientsListPage/ClientsListPage'

export const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}></Route>
                <Route path="/home" element={<Homepage/>}></Route>
                <Route path="/random-dog" element={<RandomDogPage/>}></Route>
                <Route path="/status-code" element={<StatusCodePage/>}></Route>
                <Route path="/clients" element={<ClientsListPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}