import { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch'
import Quote from './component/Quote'

import './App.scss'

type QuoteProps = {
  text: string
  author: string
}

function App() {
  const [animationClass, setAnimationClass] = useState('fade-out')
  const { status, data, fetchData } = useFetch<QuoteProps>(
    'https://simpsons-quotes-ten.vercel.app/quotes/random'
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('fade-out')
      setTimeout(() => {
        fetchData()
        setAnimationClass('fade-in')
      }, 500)
    }, 6000)

    return () => clearInterval(interval)
  }, [fetchData])

  return (
    <div className={`quote-container ${animationClass}`}>
      {status === 'fetched' && data && (
        <Quote text={data.text} author={data.author} />
      )}
    </div>
  )
}

export default App
