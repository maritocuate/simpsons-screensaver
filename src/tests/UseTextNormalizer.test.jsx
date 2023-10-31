import { describe, test, expect, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import useTextNormalizer from '../hooks/useTextNormalizer'

describe('UseTextNormalizer', () => {
  let result
  beforeEach(() => {
    result = renderHook(() => useTextNormalizer()).result
  })

  test('normalizeText capitalizes the first letter and converts the rest to lowercase', () => {
    const normalizedText = result.current.normalizeText('ExAmPle TeXT')
    expect(normalizedText).toBe('Example text')
  })
  test('removes periods at the end of text', () => {
    const normalizedText = result.current.normalizeText('Example text.')
    expect(normalizedText).toBe('Example text')
  })
})
