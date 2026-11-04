import { useEffect, useState } from 'react'

export function useRotatingIndex(count: number, interval: number, enabled: boolean) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!enabled || count < 2) return

    const id = setTimeout(() => setIndex((index + 1) % count), interval)
    return () => clearTimeout(id)
  }, [index, count, interval, enabled])

  return [index, setIndex] as const
}
