import CardUser from '../../components/CardUser/CardUser'
import Header from '../../components/Header/Header'
import { CardsContainer, HomepageContainer, FormContainer, PaginationContainer } from './style'
import useRequestData from '../../hooks/useRequestData'
import useForm from '../../hooks/useForm'
import { useState } from 'react'

/* Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api Random User Generator, 
a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, 
é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, 
deve haver uma search para buscar usuários por nome, email ou username; */

const Homepage=()=>{
    const [page, setPage] = useState(1)
    const [form, onChangeInputs] = useForm({
        search: ""
    })
    const [dataRandomUsers, errorRandomUsers, isLoadingRandomUsers] = useRequestData(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)

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
                        <input name="search" value={form.search} onChange={onChangeInputs} id="search" placeholder='Search Users'></input>
                    </form>
                </FormContainer>

                    {isLoadingRandomUsers && <h4>Loading...</h4>}
                    {!isLoadingRandomUsers && errorRandomUsers && <h4>Error: {errorRandomUsers}</h4>}

                <CardsContainer>
                    {!isLoadingRandomUsers && dataRandomUsers && randomUsers}
                </CardsContainer>

                <PaginationContainer>
                    {page === 1 ? null : <button onClick={() => setPage(page -1)}>⇐</button>}
                    <button onClick={() => setPage(1)}>1</button>
                    <button onClick={() => setPage(2)}>2</button>
                    <button onClick={() => setPage(3)}>3</button>
                    <button onClick={() => setPage(4)}>4</button>
                    <button onClick={() => setPage(5)}>5</button>
                    <button onClick={() => setPage(6)}>6</button>
                    <button onClick={() => setPage(7)}>7</button>
                    <button onClick={() => setPage(8)}>8</button>
                    <button onClick={() => setPage(9)}>9</button>
                    <button onClick={() => setPage(10)}>10</button>
                    {page === 10 ? null : <button onClick={() => setPage(page +1)}>⇒</button>}
                </PaginationContainer>
        </HomepageContainer>
    )
}

export default Homepage