import Header from '../../components/Header/Header'
import { StatusCodePageContainer } from './style'
import useForm from '../../hooks/useForm'


const StatusCodePage=()=>{

    const [form, onChangeInputs] = useForm({
        statusCode: ""
    })

    const validStatusCodes = [100, 101, 102, 103, 200, 201, 202, 203, 204, 206, 207, 
    300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 
    406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423,
    424, 425, 426, 429, 431, 444, 450, 451, 497, 498, 499, 500, 501, 502, 503, 504,
    506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 599]

    const imageSelection=()=>{      
        const isStatusValid = validStatusCodes.filter((status)=>{
            return status === Number(form.statusCode)
        })

        if(isStatusValid.length === 0){
            return <img src='https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/2496/not-found-image-15383864787lu.jpg' alt='Not found pic.'/>
        } if(isStatusValid.length === 1){
            return <img src={`https://http.cat/${isStatusValid[0]}`} alt='HTTP Cat API pic.'/>
        }       
     }

    return(
        <>
            <Header/>
            <StatusCodePageContainer>
                    <h1>Status Code</h1>
                    <input id="statusCode" name="statusCode" placeholder="Search Status Code" value={form.statusCode} onChange={onChangeInputs}/>                    
                    {imageSelection()}
            </StatusCodePageContainer>
        </>
    )
}

export default StatusCodePage