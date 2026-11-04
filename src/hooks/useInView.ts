import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element>(threshold = 0.6) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0]?.isIntersecting ?? false),
      { threshold }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView] as const
}
