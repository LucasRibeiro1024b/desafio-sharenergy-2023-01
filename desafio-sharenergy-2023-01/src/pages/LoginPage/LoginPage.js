import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { LoginPageContainer } from './style'

/*O usuário deve ser capaz de se autenticar utilizando o username desafiosharenergy e password sh@r3n3rgy, também, 
deve existir a possibilidade do usuário utilizar o remember me para realizar logins automáticos, sem a necessidade de digitar 
username e password após o primeiro acesso; */

const LoginPage=()=>{
    return(
        <div>
            <Header/>
                <LoginPageContainer>
                    <h1>Login</h1>
                    <form>
                        <label>Username</label>
                        <input name='user'></input>

                        <label >Password</label>
                        <input name='password'></input>
                    </form>
                </LoginPageContainer>
            <Footer/>
        </div>
    )
}

export default LoginPage