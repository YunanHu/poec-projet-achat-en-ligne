import { useState, useEffect } from "react"
import axios from "axios"

export default function useFetch(config) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const source = axios.CancelToken.source()
        ;(async () => {
            setLoading(true)
            setError(false)
            setData(null)
            try {
                const response = await axios({
                    ...config,
                    cancelToken: source.token
                })
                setLoading(false)
                setData(response.data)
            } catch(error) {
                if (axios.isCancel(error)) return null
                setLoading(false)
                setError(true)
            }
        })() 
        return () => source.cancel()
    }, [JSON.stringify(config)])
    
    return [data, loading, error]
}