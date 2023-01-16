import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import { ClientDetailsContainer, Card, ButtonsContainer } from "./style"
import {goToEditClientPage} from '../../routes/coordinator'
import { useNavigate } from "react-router-dom"
import { returnPage } from "../../routes/coordinator"
import { BASE_URL_CLIENTS } from '../../constants/constants'


const ClientDetailsPage=()=>{

    const [dataClientDetails, setDataClientDetails] = useState(undefined)
    const [isLoadingClientDetails, setIsLoadingClientDetails] = useState(false)
    const [errorClientDetails, setErrorClientDetails] = useState(undefined)
    const [reload, setReload] = useState(false)

    const navigate = useNavigate()

    const getClientDetails=()=>{
        setIsLoadingClientDetails(true)
        let id = localStorage.getItem("id")
        axios.get(`${BASE_URL_CLIENTS}/${id}`)
        .then((response)=>{
            setIsLoadingClientDetails(false)
            setDataClientDetails(response.data)
        })
        .catch((err)=>{
            setIsLoadingClientDetails(false)
            setErrorClientDetails(err.response.data.message)
        })
    }

    const deleteClient=(id)=>{
        axios.delete(`${BASE_URL_CLIENTS}/delete/${id}`)
        .then((response)=>{
            setReload(!reload)
        })
        .catch((err)=>{
            alert(err.response.data)
        })
    }

    useEffect(()=>{
        getClientDetails()
    }, [reload])

    const edit=(id)=>{
        localStorage.setItem("id", id)
        goToEditClientPage(navigate, id)
    }

    const clientDetails = dataClientDetails && dataClientDetails.map((client, index)=>{
        return <Card key={index}>
            <p>{client.full_name}</p>
            <p>{client.email}</p>
            <p>{client.phone_number}</p>
            <p>{client.cpf}</p>
            <p>{client.street}, {client.house_number} - {client.neighbourhood}</p>
            <ButtonsContainer>
                <button onClick={()=>edit(client.id)}>Edit</button>
                <button onClick={()=>deleteClient(client.id)}><img src="https://cdn-icons-png.flaticon.com/512/2919/2919590.png" alt="Delete X pic."/></button>
            </ButtonsContainer>
        </Card>
    })

    return(
        <>
        <Header/>
        <ClientDetailsContainer>
            <h1>Client Details</h1>

            {isLoadingClientDetails && <h4>Loading...</h4>}
            {!isLoadingClientDetails && errorClientDetails && <h4>Error: {errorClientDetails}</h4>}
            {!isLoadingClientDetails && dataClientDetails && clientDetails}

            <button type="button" onClick={()=>returnPage(navigate)}>Return</button>

        </ClientDetailsContainer> 
        </>
    )
}

export default ClientDetailsPage