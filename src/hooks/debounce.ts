import {useState, useEffect} from 'react'

export const useDebounce = (value: string, delay: number = 300): string => {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const hendler = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(hendler)
  }, [value, delay])

  return debounced
}
