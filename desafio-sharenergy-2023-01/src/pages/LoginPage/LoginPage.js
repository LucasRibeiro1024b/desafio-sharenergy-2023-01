import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { LoginContainer, LoginPageContainer, RememberFormContainer } from './style'
import useForm from '../../hooks/useForm'
import { goToHomepage } from '../../routes/coordinator'
import { useState } from 'react'

/*O usuário deve ser capaz de se autenticar utilizando o username desafiosharenergy e password sh@r3n3rgy, também, 
deve existir a possibilidade do usuário utilizar o remember me para realizar logins automáticos, sem a necessidade de digitar 
username e password após o primeiro acesso; */

const LoginPage=()=>{

    const [form, onChangeInputs, clearInputs, setForm] = useForm({
        user: "",
        password: ""
    })
    const [remember, setRemember] = useState(false)
    const [wrongData, setWrongData] = useState("")
    const navigate = useNavigate()

    const onSubmit=(e)=>{
        e.preventDefault()

        if(form.user !== "desafiosharenergy" && form.password !== "sh@r3n3rgy"){
            setWrongData("Incorrect username and password.")
        } if(form.user === "desafiosharenergy" && form.password === "sh@r3n3rgy" && remember === false){
            goToHomepage(navigate)
        } if(form.user === "desafiosharenergy" && form.password === "sh@r3n3rgy" && remember === true){
            goToHomepage(navigate)
            localStorage.setItem("user", form.user)
            localStorage.setItem("password", form.password)
        } 
    }

    const rememberMe=(e)=>{
        setRemember(e.target.checked)
    }

    return(
        <LoginPageContainer>
            <Header/>
                <LoginContainer>
                    <h1>Login</h1>
                    <form onSubmit={onSubmit}>
                        <label htmlFor= "user" >Username</label>
                        <input type="text" value={form.user} onChange={onChangeInputs} name="user" id= "user" required></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" value={form.password} onChange={onChangeInputs} name="password"  id="password" required></input>

                        {wrongData}

                        <button type='submit'>Login</button>
                    </form>
                </LoginContainer>
                        <RememberFormContainer>
                                <input type='checkbox' checked={remember} onChange={rememberMe} name="remember" id="remember"></input>
                                <p>Remember me</p>
                        </RememberFormContainer>
        </LoginPageContainer>
    )
}

export default LoginPage