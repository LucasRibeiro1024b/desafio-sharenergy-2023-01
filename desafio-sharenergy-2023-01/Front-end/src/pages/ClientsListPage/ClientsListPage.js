import Header from '../../components/Header/Header'
import { ClientsContainer, ClientsListPageContainer, CreateClientButton } from './style'
import useRequestData from '../../hooks/useRequestData'
import CardClient from '../../components/CardClient/CardClient'
import { useState } from 'react'
import axios from 'axios'

/* Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, 
atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf. */

const ClientsListPage=()=>{

    const [dataClients, errorClients, isLoadingClients] = useRequestData("https://desafio-sharenergy-2023-01-jsk4.onrender.com/clients")
    const [error, setError] = useState(undefined)

    const clientsList = dataClients && dataClients.map((client)=>{
        return <CardClient key={client.id} client={client}/>
    })

    /* const body = {
        "name": form.name,
        "planet": form.planet,
        "date": form.date,
        "description": form.description,
        "durationInDays": form.duration
    } */

    /* const createClient=()=>{
        axios.post("https://desafio-sharenergy-2023-01-jsk4.onrender.com/clients", body)
    } */

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

                <CreateClientButton>Create New Client</CreateClientButton>
          
        </ClientsListPageContainer>
        </>
    )
}

export default ClientsListPage