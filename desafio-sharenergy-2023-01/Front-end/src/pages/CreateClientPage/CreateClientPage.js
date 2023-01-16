import Header from "../../components/Header/Header"
import { CreateClientContainer } from "./style"
import useForm from '../../hooks/useForm'
import axios from "axios"

const CreateClientPage=()=>{

    const [form, onChangeInputs, clearInputs] = useForm({
        cpf: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        zipCode: "",
        street: "",
        houseNumber: "",
        neighbourhood: ""
    })

    const body = {
        "cpf": form.cpf,
        "fullName": form.fullName,
        "email": form.email,
        "phoneNumber": form.phoneNumber,
        "zipCode": form.zipCode,
        "street": form.street,
        "houseNumber": form.houseNumber,
        "neighbourhood": form.neighbourhood
    } 

    const createClient=(e)=>{
        e.preventDefault()
        axios.post("https://desafio-sharenergy-2023-01-hol7.onrender.com/clients", body)
        .then((response)=>{
            alert("Client created successfully!")
        })
        .catch((err)=>{
            console.log(err)
            alert(err)
        })
        clearInputs()
    }

    return(
        <>
        <Header/>
        <CreateClientContainer>
            <h1>Create Client</h1>
            <form onSubmit={createClient}>
            <input name="cpf" value={form.cpf} onChange={onChangeInputs} placeholder="Cpf"/>
            <input name="fullName" value={form.fullName} onChange={onChangeInputs} placeholder="Full Name"/>
            <input name="email" value={form.email} onChange={onChangeInputs} placeholder="E-mail"/>
            <input name="phoneNumber" type="number" value={form.phoneNumber} onChange={onChangeInputs} placeholder="Phone Number"/>
            <input name="zipCode" value={form.zipCode} onChange={onChangeInputs} placeholder="Zip Code"/>
            <input name="street" value={form.street} onChange={onChangeInputs} placeholder="Street"/>
            <input name="houseNumber" value={form.houseNumber} onChange={onChangeInputs} placeholder="House Number"/>
            <input name="neighbourhood" value={form.neighbourhood} onChange={onChangeInputs} placeholder="Neighbourhood"/>
            <button>Create</button>
            </form>
        </CreateClientContainer> 
        </>
    )
}

export default CreateClientPage