import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { LoginPageContainer } from './style'

const LoginPage=()=>{
    return(
        <div>
            <Header/>
                <LoginPageContainer>
                    <h1>Login</h1>
                    <form>
                        <label htmlFor='user'>User</label>
                        <input type='user'></input>

                        <label htmlFor='password'>Password</label>
                        <input></input>
                    </form>
                </LoginPageContainer>
            <Footer/>
        </div>
    )
}

export default LoginPage