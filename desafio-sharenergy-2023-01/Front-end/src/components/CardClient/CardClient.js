import { useNavigate } from "react-router-dom"
import { goToEditClientPage } from "../../routes/coordinator"
import { ButtonsContainer, Card } from "./style"

const CardClient=({client, deleteClient})=>{

    const navigate = useNavigate()

    return(
        <div>
            <Card>
                <p>{client.full_name}</p>
                <p>{client.email}</p>
                <p>{client.phone_number}</p>
                <ButtonsContainer>
                    <button>Details</button>
                    <button onClick={()=>goToEditClientPage(navigate, client.id)}>Edit</button>
                    <button onClick={()=>deleteClient(client.id)}><img src="https://cdn-icons-png.flaticon.com/512/2919/2919590.png" alt="Delete X pic."/></button>
                </ButtonsContainer>
            </Card>
        </div>
    )
}

export default CardClient