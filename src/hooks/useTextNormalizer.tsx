import { useCallback } from 'react'

const useTextNormalizer = () => {
  const normalizeText = useCallback((text: string) => {
    const capitalizeText = text.charAt(0).toUpperCase()
    let lowerText = capitalizeText + text.slice(1).toLocaleLowerCase()
    // add a period at the end of the text
    if (!lowerText.match(/[!.\u2026]$/)) lowerText = lowerText + '.'
    return lowerText
  }, [])

  return { normalizeText }
}

export default useTextNormalizer
