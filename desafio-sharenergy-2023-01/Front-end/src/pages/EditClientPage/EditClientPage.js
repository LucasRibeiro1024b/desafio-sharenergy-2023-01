import Header from "../../components/Header/Header"
import { ButtonsContainer, EditClientContainer } from "./style"
import useForm from "../../hooks/useForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { returnPage } from '../../routes/coordinator'
import { useState } from "react"
import { BASE_URL_CLIENTS } from "../../constants/constants"
import { validateZipCode,
    validatePhoneNumber, 
    validateEmail, 
    validateName,
    validateStreet, 
    validateHouseNumber, 
    validateNeighbourhood 
} from "../../validations/validations"


const EditClientPage=()=>{
    
    const navigate = useNavigate()

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)
    const [isStreetValid, setIsStreetValid] = useState(true)
    const [isHouseNumberValid, setIsHouseNumberValid] = useState(true)
    const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(true)
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true)
    const [isZipCodeValid, setIsZipCodeValid] = useState(true)
    const [message, setMessage] = useState(undefined)

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

    const editClient=()=>{
        let id = localStorage.getItem("id")
        axios.patch(`${BASE_URL_CLIENTS}/${id}`, body)
        .then((response)=>{
            alert("Client edited successfully!")
        })
        .catch((err)=>{
            setMessage(err.response.data)
        })
        clearInputs()
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        setIsNameValid(validateName(form.fullName))
        setIsEmailValid(validateEmail(form.email))
        setIsStreetValid(validateStreet(form.street))
        setIsHouseNumberValid(validateHouseNumber(form.houseNumber))
        setIsNeighbourhoodValid(validateNeighbourhood(form.neighbourhood))
        setIsPhoneNumberValid(validatePhoneNumber(form.phoneNumber))
        setIsZipCodeValid(validateZipCode(form.zipCode))

        isNameValid && 
        isPhoneNumberValid && 
        isZipCodeValid && 
        isEmailValid && 
        isStreetValid && 
        isHouseNumberValid && 
        isNeighbourhoodValid && 
        editClient()
    }

    return(
        <>
        <Header/>
        <EditClientContainer>
            <h1>Edit Client</h1>
            <form onSubmit={onSubmit}>
            <input name="fullName" value={form.fullName} onChange={onChangeInputs} placeholder="Full Name"/>
            <input name="email" value={form.email} onChange={onChangeInputs} placeholder="E-mail"/>
            <input name="phoneNumber" value={form.phoneNumber} onChange={onChangeInputs} placeholder="Phone Number"/>          
            <input name="zipCode" value={form.zipCode} onChange={onChangeInputs} placeholder="Zip Code"/>         
            <input name="street" value={form.street} onChange={onChangeInputs} placeholder="Street"/>
            <input name="houseNumber" value={form.houseNumber} onChange={onChangeInputs} placeholder="House Number"/>
            <input name="neighbourhood" value={form.neighbourhood} onChange={onChangeInputs} placeholder="Neighbourhood"/>
            <ButtonsContainer>
                <button>Edit</button>
                <button type="button" onClick={()=>returnPage(navigate)}>Return</button>
            </ButtonsContainer>
            </form>

            {message === "It is necessary to inform at least one of the following parameters to complete the request: fullName, email, phoneNumber, zipCode, street, houseNumber or neighbourhood." 
            && <p>You must enter at least one of the following parameters to edit: Full name, E-mail, Phone Number, Zip Code, Street, House Number or Neighbourhood.</p>}

            {message !== "It is necessary to inform at least one of the following parameters to complete the request: fullName, email, phoneNumber, zipCode, street, houseNumber or neighbourhood."
            && <p>{message}</p>}

        </EditClientContainer> 
        </>
    )
}

export default EditClientPage