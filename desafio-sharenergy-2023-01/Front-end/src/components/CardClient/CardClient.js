import { useNavigate } from "react-router-dom"
import { goToClientDetailsPage, goToEditClientPage } from "../../routes/coordinator"
import { ButtonsContainer, Card } from "./style"

const CardClient=({client, deleteClient})=>{

    const navigate = useNavigate()

    const edit=(id)=>{
        localStorage.setItem("id", id)
        goToEditClientPage(navigate, id)
    }

    const details=(id)=>{
        localStorage.setItem("id", id)
        goToClientDetailsPage(navigate, id)
    }
    return(
        <div>
            <Card>
                <p>{client.full_name}</p>
                <p>{client.email}</p>
                <p>{client.phone_number}</p>
                <ButtonsContainer>
                    <button onClick={()=>details(client.id)}>Details</button>
                    <button onClick={()=>edit(client.id)}>Edit</button>
                    <button onClick={()=>deleteClient(client.id)}><img src="https://cdn-icons-png.flaticon.com/512/2919/2919590.png" alt="Delete X pic."/></button>
                </ButtonsContainer>
            </Card>
        </div>
    )
}

export default CardClient