import CardUser from '../../components/CardUser/CardUser'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { CardsContainer, HomepageContainer, FormContainer } from './style'
import search from '../../images/search.png'

/* Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api Random User Generator, 
a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, 
é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, 
deve haver uma search para buscar usuários por nome, email ou username; */

const Homepage=()=>{
    return(
        <div>
           <HomepageContainer>
            <Header/>
            <h1>List of Users</h1>
                <FormContainer>
                    <form>
                        <img src={search} alt= "Magnifying glass icon."/>
                        <input name='search' placeholder='Search Users'></input>
                    </form>
                </FormContainer>

                <CardsContainer>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>                                        
                </CardsContainer>
            <Footer/>
            </HomepageContainer>
        </div>
    )
}

export default Homepage