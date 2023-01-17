import { useNavigate } from 'react-router-dom'
import { LoginContainer, LoginPageContainer, RememberFormContainer } from './style'
import useForm from '../../hooks/useForm'
import { goToHomepage } from '../../routes/coordinator'
import { useState } from 'react'


const LoginPage=()=>{

    const [form, onChangeInputs] = useForm({
        user: "",
        password: ""
    })
    const [remember, setRemember] = useState(false)
    const [wrongData, setWrongData] = useState("")
    const navigate = useNavigate()

    const onSubmit=(e)=>{
        e.preventDefault()

        if(form.user !== "desafiosharenergy" && form.password !== "sh@r3n3rgy"){
            setWrongData("Incorrect login information.")
        } if(form.user === "desafiosharenergy" && form.password === "sh@r3n3rgy" && remember === true){
            goToHomepage(navigate)
            localStorage.setItem("remember", "remember")
        } if(form.user === "desafiosharenergy" && form.password === "sh@r3n3rgy" && remember === false){
            goToHomepage(navigate)
            localStorage.setItem("remember", "notRemember")
        }
    }

    const rememberMe=(e)=>{
        setRemember(e.target.checked)
    }

    return(
        <LoginPageContainer>
            <header>
                <h2>Challenge Sharenergy 2023-01</h2>
            </header>
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