import Header from "../../components/Header/Header"
import { EditClientContainer } from "./style"
import useForm from "../../hooks/useForm"
import axios from "axios"


const EditClientPage=({dataClients, errorClients, isLoadingClients, reload, setReload})=>{    

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
        "fullName": form.fullName,
        "email": form.email,
        "phoneNumber": form.phoneNumber,
        "zipCode": form.zipCode,
        "street": form.street,
        "houseNumber": form.houseNumber,
        "neighbourhood": form.neighbourhood
    } 

    const editClient=(id)=>{
        axios.patch(`https://desafio-sharenergy-2023-01-hol7.onrender.com/clients/${id}`, body)
        .then((response)=>{
            alert("Client edited successfully!")
            setReload(!reload)
        })
        .catch((err)=>{
            alert(err.response.data)
        })
        clearInputs()
    }

    return(
        <>
        <Header/>
        <EditClientContainer>
            <h1>Edit Client</h1>
            <form onSubmit={editClient}>
            <input name="cpf" value={form.cpf} onChange={onChangeInputs} placeholder="Cpf"/>
            <input name="fullName" value={form.fullName} onChange={onChangeInputs} placeholder="Full Name"/>
            <input name="email" value={form.email} onChange={onChangeInputs} placeholder="E-mail"/>
            <input name="phoneNumber" type="number" value={form.phoneNumber} onChange={onChangeInputs} placeholder="Phone Number"/>
            <input name="zipCode" value={form.zipCode} onChange={onChangeInputs} placeholder="Zip Code"/>
            <input name="street" value={form.street} onChange={onChangeInputs} placeholder="Street"/>
            <input name="houseNumber" value={form.houseNumber} onChange={onChangeInputs} placeholder="House Number"/>
            <input name="neighbourhood" value={form.neighbourhood} onChange={onChangeInputs} placeholder="Neighbourhood"/>
            <button>Edit</button>
            </form>

        </EditClientContainer> 
        </>
    )
}

export default EditClientPage