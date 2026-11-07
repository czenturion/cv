import { useEffect, useRef, useState } from 'react'

type Options = {
  threshold?: number
  once?: boolean
}

export function useInView<T extends Element>({ threshold = 0.6, once = false }: Options = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0]?.isIntersecting ?? false
        if (once && isIntersecting) {
          setInView(true)
          observer.disconnect()
          return
        }
        if (!once) setInView(isIntersecting)
      },
      { threshold }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView] as const
}
