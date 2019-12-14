import { renderHook } from '@testing-library/react-hooks'
import usePrevious from '../usePrevious'

const setUp = () => renderHook(({ value }) => usePrevious(value), { initialProps: { value: 0 } })

it('should return undefined on initial render', () => {
  const { result } = setUp()

  expect(result.current).toBeUndefined()
})

it('should always return previous value after each update', () => {
  const { result, rerender } = setUp()

  rerender({ value: 2 })
  expect(result.current).toBe(0)

  rerender({ value: 4 })
  expect(result.current).toBe(2)

  rerender({ value: 6 })
  expect(result.current).toBe(4)
})
