import { useCallback } from 'react'

const useTextNormalizer = () => {
  const normalizeText = useCallback((text: string) => {
    const capitalizeText = text.charAt(0).toUpperCase()
    const lowerText = capitalizeText + text.slice(1).toLocaleLowerCase()
    const removePeriods = lowerText.replace(/\.$/, '')
    return removePeriods
  }, [])

  return { normalizeText }
}

export default useTextNormalizer
