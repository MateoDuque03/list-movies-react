import { useCallback, useEffect, useRef } from 'react'
export const useDebounce = () => {
  const timer = useRef()

  const debounce = useCallback(
    (func, wait = 1000) => {
      clearTimeout(timer.current)
      const timeout = setTimeout(() => func(), wait)
      timer.current = timeout
    },
    [timer]
  )

  useEffect(() => {
    return () => {
      timer.current && clearTimeout(timer.current)
    }
  }, [])

  return debounce
}