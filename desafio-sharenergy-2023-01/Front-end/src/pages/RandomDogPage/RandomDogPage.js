import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { DogCard, RandomDogPageContainer } from './style'

//Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api Random Dog; 

const RandomDogPage=()=>{

    const [randomDogs, setRandomDogs] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(undefined)

    const getRandomDogs=()=>{
        setIsLoading(true)
        axios.get("https://random.dog/woof.json")
        .then((response)=>{
            setIsLoading(false)
            setRandomDogs(response.data)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err.response.data.message)
        })
    }

    useEffect(()=>{
        getRandomDogs()
    }, [])

    if(randomDogs){
        console.log(randomDogs.url.includes(".mp4"))
    }

    const conditionalReturn=()=>{
        if(randomDogs && randomDogs.url.includes(".mp4")){
            return <video src={randomDogs.url} alt="Random dog video." controls/>
        } if(randomDogs && !randomDogs.url.includes(".mp4")){
            return <img src={randomDogs.url} alt="Random dog pic."/>
        }
    }

    return(
        <>
            <Header/>
            <RandomDogPageContainer>
                    <h1>Random Dog</h1>

                    {isLoading && <h4>Loading...</h4>}
                    {!isLoading && error && <h4>Error: {error}</h4>}                
                    {!isLoading && randomDogs &&
                    <DogCard>
                        {conditionalReturn()}
                        <button onClick={()=> getRandomDogs()}><img src='https://cdn-icons-png.flaticon.com/512/159/159075.png' alt='Refresh icon.'/></button>
                    </DogCard>}

            </RandomDogPageContainer>
        </>            
    )
}

export default RandomDogPage 