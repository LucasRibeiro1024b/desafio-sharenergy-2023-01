import Header from '../../components/Header/Header'
import { RandomDogPageContainer } from './style'

/* Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api Random Dog; */

const RandomDogPage=()=>{
    return(
        <RandomDogPageContainer>
            <Header/>
                <h1>Random Dog</h1>
        </RandomDogPageContainer>
    )
}

export default RandomDogPage