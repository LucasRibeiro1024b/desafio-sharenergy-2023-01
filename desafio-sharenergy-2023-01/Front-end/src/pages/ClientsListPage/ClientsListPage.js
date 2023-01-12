import Header from '../../components/Header/Header'
import { ClientsListPageContainer } from './style'

/* Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, 
atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf. */

const ClientsListPage=()=>{
    return(
        <ClientsListPageContainer>
            <Header/>
                <h1>Clients List</h1>
          
        </ClientsListPageContainer>
    )
}

export default ClientsListPage