import { useState, useEffect } from "react"
import axios from 'axios'

const useRequestData=(url)=>{
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [reload, setReload] = useState(false)

    useEffect(()=>{
        setIsLoading(true)

        axios.get(url)
        .then((response)=>{
            setIsLoading(false)
            setData(response.data)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err.response.data.message)
        })
    }, [url, reload])

    return [data, error, isLoading, reload, setReload]
}

export default useRequestData