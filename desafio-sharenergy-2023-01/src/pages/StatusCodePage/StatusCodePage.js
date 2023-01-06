import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

/* Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api HTTP Cat 
relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio; */

const StatusCodePage=()=>{
    return(
        <div>
            <Header/>
                <h1>Status Code</h1>
            <Footer/>
        </div>
    )
}

export default StatusCodePage