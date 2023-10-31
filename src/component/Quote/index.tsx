import useTextNormalizer from '../../hooks/useTextNormalizer'

import './index.scss'

interface QuoteProps {
  text: string
  author: string
}

const Quote = ({ text, author }: QuoteProps) => {
  const { normalizeText } = useTextNormalizer()
  const formattedQuote = normalizeText(text)
  const splittedQuote = formattedQuote.split(' ')
  const formattedAuthor = author.toUpperCase()

  return (
    <span id="wrapper-quote">
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
