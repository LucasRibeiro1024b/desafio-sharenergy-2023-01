import { Card } from "./style"

const CardUser=({user})=>{
    return(
        <div>
            <Card>
                <img src={user.picture.large} alt={`User ${user.login.username}.`}/>
                <p>{user.name.first} {user.name.last}</p>
                <p>{user.email}</p>
                <p>{user.login.username}</p>
                <p>{user.registered.age}</p>
            </Card>
        </div>
    )
}

export default CardUser