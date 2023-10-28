import { useState, useEffect } from 'react'

type FetchStatus = 'idle' | 'fetching' | 'fetched'

export const useFetch = (url: string) => {
  const [status, setStatus] = useState<FetchStatus>('idle')
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return
    const fetchData = async () => {
      setStatus('fetching')
      const response = await fetch(url)
      const responseData = await response.json()
      setData(responseData)
      setStatus('fetched')
    }

    fetchData()
  }, [url])

  return { status, data }
}
