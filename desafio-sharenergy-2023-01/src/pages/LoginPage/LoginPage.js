import Header from '../../components/Header/Header'
import { LoginContainer, LoginPageContainer } from './style'

/*O usuário deve ser capaz de se autenticar utilizando o username desafiosharenergy e password sh@r3n3rgy, também, 
deve existir a possibilidade do usuário utilizar o remember me para realizar logins automáticos, sem a necessidade de digitar 
username e password após o primeiro acesso; */

const LoginPage=()=>{
    return(
        <LoginPageContainer>
            <Header/>
                <LoginContainer>
                    <h1>Login</h1>
                    <form>
                        <label htmlFor= "user" >Username</label>
                        <input id= "user"></input>

                        <label htmlFor="password">Password</label>
                        <input id="password"></input>
                    </form>
                </LoginContainer>
        </LoginPageContainer>
    )
}

export default LoginPage