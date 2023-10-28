import { useState, useEffect } from 'react'

type FetchStatus = 'idle' | 'fetching' | 'fetched'

interface FetchResult<T> {
  data: T | null
  status: FetchStatus
}

export function useFetch<T>(url: string): FetchResult<T> {
  const [status, setStatus] = useState<FetchStatus>('idle')
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    if (!url) return
    const fetchData = async () => {
      setStatus('fetching')
      const response = await fetch(url)
      const responseData: T = await response.json()
      setData(responseData)
      setStatus('fetched')
    }

    fetchData()
  }, [url])

  return { status, data }
}
