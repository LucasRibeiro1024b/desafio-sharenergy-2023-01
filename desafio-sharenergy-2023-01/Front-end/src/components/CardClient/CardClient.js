import { ButtonsContainer, Card } from "./style"

const CardClient=({client})=>{
    return(
        <div>
            <Card>
                <p>{client.full_name}</p>
                <p>{client.email}</p>
                <p>{client.phone_number}</p>
                <ButtonsContainer>
                    <button>Details</button>
                    <button>Edit</button>
                    <button><img src="https://cdn-icons-png.flaticon.com/512/2919/2919590.png" alt="Delete X pic."/></button>
                </ButtonsContainer>
            </Card>
        </div>
    )
}

export default CardClient