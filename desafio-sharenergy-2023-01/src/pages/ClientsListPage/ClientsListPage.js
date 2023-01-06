import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

/* Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, 
atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf. */

const ClientsListPage=()=>{
    return(
        <div>
            <Header/>
                <h1>Clients List</h1>
            <Footer/>
        </div>
    )
}

export default ClientsListPage