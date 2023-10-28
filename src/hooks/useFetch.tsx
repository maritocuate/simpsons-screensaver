import { useState, useEffect } from 'react'

type FetchStatus = 'idle' | 'fetching' | 'fetched'

interface FetchResult<T> {
  data: T | null
  status: FetchStatus
  fetchData: () => void
}

export function useFetch<T>(url: string): FetchResult<T> {
  const [status, setStatus] = useState<FetchStatus>('idle')
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    fetchData()
  }, [url])

  const fetchData = async () => {
    if (url) {
      setStatus('fetching')
      const response = await fetch(url)
      const responseData: T = await response.json()
      setData(responseData)
      setStatus('fetched')
    }
  }

  return { status, data, fetchData }
}
