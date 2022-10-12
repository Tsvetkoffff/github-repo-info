import {useState, useEffect} from 'react'

export const useSuspend = (value: string, delay: number = 500): string => {
  const [suspended, setSuspended] = useState(value)

  useEffect(() => {
    const hendler = setTimeout(() => setSuspended(value), delay)
    return () => clearTimeout(hendler)
  }, [value, delay])

  return suspended
}
