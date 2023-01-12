import Header from '../../components/Header/Header'
import { StatusCodePageContainer } from './style'
import useForm from '../../hooks/useForm'

/* Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a 
seleção, deve ser retornada uma imagem da api HTTP Cat relacionada ao status escolhido, caso não exista tal 
imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio; */

const StatusCodePage=()=>{

    const [form, onChangeInputs] = useForm({
        statusCode: 100
    })

    const validStatusCodes = [100, 101, 102, 200, 201, 202, 203, 204, 205, 206, 207, 
    208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 400, 401, 402, 403, 404, 405, 
    406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 422, 423,
    424, 425, 426, 428, 429, 431, 444, 449, 450, 499, 500, 501, 502, 503, 504, 505,
    506, 507, 509, 510]

    const imageSelection=()=>{      
        const isStatusValid = validStatusCodes.filter((status)=>{
            return status == form.statusCode
        })

        if(isStatusValid.length === 0){
            return <img src='https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/2496/not-found-image-15383864787lu.jpg' alt='Not found.'/>
        } if(isStatusValid.length === 1){
            return <img src={`https://http.cat/${isStatusValid[0]}`} alt='HTTP Cats API pic.'/>
        }       
     }

    return(
        <>
            <Header/>
            <StatusCodePageContainer>
                    <h1>Status Code</h1>
                    <label htmlFor="statusCode">Type a Status Code</label>
                    <input id="statusCode" name="statusCode" value={form.statusCode} onChange={onChangeInputs}/>                    
                    {imageSelection()}
            </StatusCodePageContainer>
        </>
    )
}

export default StatusCodePage