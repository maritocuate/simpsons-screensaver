import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Quote from '../component/Quote'

describe('Quote', () => {
  test('renders a quote', () => {
    const quoteText = 'This is a test quote'
    const quoteAuthor = 'Test Author'

    render(<Quote text={quoteText} author={quoteAuthor} />)
    expect(screen.getByText('This')).toBeDefined()
  })
})
