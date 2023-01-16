import Header from '../../components/Header/Header'
import { ClientsContainer, ClientsListPageContainer, CreateClientButton } from './style'
import CardClient from '../../components/CardClient/CardClient'
import {goToCreateClientPage} from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL_CLIENTS } from '../../constants/constants'


const ClientsListPage=()=>{

    const [dataClients, errorClients, isLoadingClients, reload, setReload] = useRequestData(`${BASE_URL_CLIENTS}`)
    const navigate = useNavigate()

    const deleteClient=(id)=>{
        axios.delete(`${BASE_URL_CLIENTS}/delete/${id}`)
        .then((response)=>{
            setReload(!reload)
        })
        .catch((err)=>{
            alert(err.response.data)
        })
    }

    const clientsList = dataClients && dataClients.map((client, index)=>{
        return <CardClient key={index} client={client} deleteClient={deleteClient}/>
    })

    return(
        <>
        <Header/>
        <ClientsListPageContainer>
                <h1>Clients</h1>

                {isLoadingClients && <h4>Loading...</h4>}
                {!isLoadingClients && errorClients && <h4>Error: {errorClients}</h4>}

                <ClientsContainer>
                    {!isLoadingClients && dataClients && clientsList}
                </ClientsContainer>

                <CreateClientButton onClick={()=> goToCreateClientPage(navigate)}>Create New Client</CreateClientButton>
          
        </ClientsListPageContainer>
        </>
    )
}

export default ClientsListPage