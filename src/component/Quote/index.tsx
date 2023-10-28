import { useEffect, useState } from 'react'

import './index.scss'

interface QuoteProps {
  text: string
  author: string
}

const normalizeText = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase()
}

const Quote = ({ text, author }: QuoteProps) => {
  const [visible, setVisible] = useState<boolean>(false)
  const formattedQuote = normalizeText(text)
  const splittedQuote = formattedQuote.split(' ')
  const formattedAuthor = author.toUpperCase()

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <span id="wrapper-quote" className={visible ? 'fade-in' : ''}>
      <h1 id="quote">
        "
        {splittedQuote.map((word, i) => (
          <span key={i}>{word}</span>
        ))}
        "
      </h1>
      <p>{formattedAuthor}</p>
    </span>
  )
}
export default Quote
