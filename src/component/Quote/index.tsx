import './index.scss'

interface QuoteProps {
  text: string
  author: string
}

const normalizeText = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase()
}

const Quote = ({ text, author }: QuoteProps) => {
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
