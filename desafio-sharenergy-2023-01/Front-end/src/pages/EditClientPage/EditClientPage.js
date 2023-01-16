import Header from "../../components/Header/Header"
import { EditClientContainer } from "./style"
import useForm from "../../hooks/useForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { returnPage } from '../../routes/coordinator'


const EditClientPage=()=>{
    
    const navigate = useNavigate()

    const [form, onChangeInputs, clearInputs] = useForm({
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

    const editClient=(e)=>{
        e.preventDefault()
        let id = localStorage.getItem("id")
        axios.patch(`https://desafio-sharenergy-2023-01-cn2n.onrender.com/clients/${id}`, body)
        .then((response)=>{
            alert("Client edited successfully!")
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
            <input name="fullName" value={form.fullName} onChange={onChangeInputs} placeholder="Full Name"/>
            <input name="email" value={form.email} onChange={onChangeInputs} placeholder="E-mail"/>
            <input name="phoneNumber" type="number" value={form.phoneNumber} onChange={onChangeInputs} placeholder="Phone Number"/>
            <input name="zipCode" value={form.zipCode} onChange={onChangeInputs} placeholder="Zip Code"/>
            <input name="street" value={form.street} onChange={onChangeInputs} placeholder="Street"/>
            <input name="houseNumber" value={form.houseNumber} onChange={onChangeInputs} placeholder="House Number"/>
            <input name="neighbourhood" value={form.neighbourhood} onChange={onChangeInputs} placeholder="Neighbourhood"/>
            <button>Edit</button>
            <button type="button" onClick={()=>returnPage(navigate)}>Return</button>
            </form>

        </EditClientContainer> 
        </>
    )
}

export default EditClientPage