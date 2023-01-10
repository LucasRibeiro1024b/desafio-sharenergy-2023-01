import CardUser from '../../components/CardUser/CardUser'
import Header from '../../components/Header/Header'
import { CardsContainer, HomepageContainer, FormContainer } from './style'
import search from '../../images/search.png'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL_RANDOM_USER } from '../../constants/constants'
import useForm from '../../hooks/useForm'

/* Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api Random User Generator, 
a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, 
é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, 
deve haver uma search para buscar usuários por nome, email ou username; */

const Homepage=()=>{

    const [dataRandomUsers, errorRandomUsers, isLoadingRandomUsers] = useRequestData("https://randomuser.me/api/?results=100")
    const [dataRandomUsersPagination, errorRandomUsersPagination, isLoadingRandomUsersPagination] = useRequestData("https://randomuser.me/api/?page=1&results=10&seed=abc")
    const [form, onChangeInputs] = useForm({
        search: ""
    })

    const randomUsers = dataRandomUsers && dataRandomUsers.results
    .filter(user => form.search === "" 
    || user.name.first.toLowerCase().includes(form.search.toLowerCase()) 
    || user.name.last.toLowerCase().includes(form.search.toLowerCase())
    || user.email.toLowerCase().includes(form.search.toLowerCase())
    || user.login.username.toLowerCase().includes(form.search.toLowerCase())
    )
    .map((user, index)=>{         
        return <CardUser class="item" key={index} user={user}/>         
    }) 
        

    return(
        <HomepageContainer>
            <Header/>
            <h1>List of Users</h1>
                <FormContainer>
                    <form>
                        <img src={search} alt= "Magnifying glass icon."/>
                        <input name="search" value={form.search} onChange={onChangeInputs} id="search" placeholder='Search Users'></input>
                    </form>
                </FormContainer>

                    {isLoadingRandomUsers && <p>Carregando...</p>}

                    {!isLoadingRandomUsers && errorRandomUsers && <p>Error: {errorRandomUsers}</p>}

                <CardsContainer>
                    {!isLoadingRandomUsers && dataRandomUsers && randomUsers}
                </CardsContainer>
        </HomepageContainer>
    )
}

export default Homepage