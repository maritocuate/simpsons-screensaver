import { useFetch } from './hooks/useFetch'
import Quote from './component/Quote'

import './App.scss'

type QuoteProps = {
  text: string
  author: string
}

function App() {
  const { status, data } = useFetch<QuoteProps>(
    'https://simpsons-quotes-ten.vercel.app/quotes/random'
  )
  if (status === 'fetched' && data) {
    const { text, author } = data
    return <Quote text={text} author={author} />
  }
}

export default App
