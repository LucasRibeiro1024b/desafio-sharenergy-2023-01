import Header from '../../components/Header/Header'
import { ClientsContainer, ClientsListPageContainer, CreateClientButton } from './style'
import CardClient from '../../components/CardClient/CardClient'
import {goToCreateClientPage} from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useRequestData from '../../hooks/useRequestData'

/* Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, 
atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf. */

const ClientsListPage=()=>{

    const [dataClients, errorClients, isLoadingClients, reload, setReload] = useRequestData("https://desafio-sharenergy-2023-01-hol7.onrender.com/clients")
    const navigate = useNavigate()

    const deleteClient=(id)=>{
        axios.delete(`https://desafio-sharenergy-2023-01-hol7.onrender.com/clients/delete/${id}`)
        .then((response)=>{
            setReload(!reload)
        })
        .catch((err)=>{
            alert(err.response.data)
        })
    }

    const clientsList = dataClients && dataClients.map((client)=>{
        return <CardClient key={client.id} client={client} deleteClient={deleteClient}/>
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