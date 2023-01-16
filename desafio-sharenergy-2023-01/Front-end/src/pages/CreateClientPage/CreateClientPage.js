import Header from "../../components/Header/Header"
import { ButtonsContainer, CreateClientContainer } from "./style"
import useForm from '../../hooks/useForm'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { returnPage } from '../../routes/coordinator'
import { BASE_URL_CLIENTS } from '../../constants/constants'
import { useState } from "react"
import { validateZipCode,
    validatePhoneNumber, 
    validateEmail, 
    validateName,
    validateStreet, 
    validateHouseNumber, 
    validateNeighbourhood 
} from "../../validations/validations"

const CreateClientPage=()=>{

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

    const createClient=()=>{
        axios.post(`${BASE_URL_CLIENTS}`, body)
        .then((response)=>{
            alert("Client created successfully!")
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
        createClient()
    }

    return(
        <>
        <Header/>
        <CreateClientContainer>
            <h1>Create Client</h1>
            <form onSubmit={onSubmit}>
            <input name="cpf" value={form.cpf} onChange={onChangeInputs} placeholder="Cpf"/>
            {message === "Invalid cpf." && <p>Enter a valid CPF and do not use special characters.</p>}
            <input name="fullName" value={form.fullName} onChange={onChangeInputs} placeholder="Full Name"/>
            {!isNameValid && <p>Enter your full name with at least 5 characters.</p>}
            <input name="email" value={form.email} onChange={onChangeInputs} placeholder="E-mail"/>
            {!isEmailValid && <p>Invalid e-mail.</p>}
            <input name="phoneNumber" value={form.phoneNumber} onChange={onChangeInputs} placeholder="Phone Number"/>
            {!isPhoneNumberValid && <p>Enter your phone number with at least 11 characters.</p>}          
            <input name="zipCode" value={form.zipCode} onChange={onChangeInputs} placeholder="Zip Code"/>
            {!isZipCodeValid && <p>Enter your zip code with at least 8 characters and no special characters.</p>}           
            <input name="street" value={form.street} onChange={onChangeInputs} placeholder="Street"/>
            {!isStreetValid && <p>Enter your street name with at least 5 characters.</p>}
            <input name="houseNumber" value={form.houseNumber} onChange={onChangeInputs} placeholder="House Number"/>
            {!isHouseNumberValid && <p>Enter your house number with at least 2 characters.</p>}
            <input name="neighbourhood" value={form.neighbourhood} onChange={onChangeInputs} placeholder="Neighbourhood"/>
            {!isNeighbourhoodValid && <p>Enter your house number with at least 5 characters.</p>}
            <ButtonsContainer>
                <button>Create</button>
                <button type="button" onClick={()=>returnPage(navigate)}>Return</button>
            </ButtonsContainer>
            </form>

            {message === "It is necessary to inform the following parameters to complete the request: cpf, fullName, email, phoneNumber, zipCode, street, houseNumber and neighbourhood."
            && <p>You must enter the following parameters to create a client: CPF, Full name, E-mail, Phone Number, Zip Code, Street, House Number and Neighbourhood.</p>}

            {message !== "Invalid cpf." 
            && message !== "It is necessary to inform the following parameters to complete the request: cpf, fullName, email, phoneNumber, zipCode, street, houseNumber and neighbourhood."
            && <p>{message}</p>}

            

        </CreateClientContainer> 
        </>
    )
}

export default CreateClientPage