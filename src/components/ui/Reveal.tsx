import type { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

/** Fades and slides its content in once, when it scrolls into view */
export function Reveal({ children }: { children: ReactNode }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1, once: true })

  return (
    <div
      ref={ref}
      className={`transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      {children}
    </div>
  )
}
