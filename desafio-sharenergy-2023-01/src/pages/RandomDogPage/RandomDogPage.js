import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

/* Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api Random Dog; */

const RandomDogPage=()=>{
    return(
        <div>
            <Header/>
                <h1>Random Dog</h1>
            <Footer/>
        </div>
    )
}

export default RandomDogPage