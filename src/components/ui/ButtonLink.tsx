import type { ComponentProps } from 'react'

export function ButtonLink(props: ComponentProps<'a'>) {
  return (
    <a
      className="inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-neon-cyan px-6 py-3 font-semibold text-neon-cyan shadow-neon-sm transition hover:-translate-y-0.5 hover:bg-neon-cyan hover:text-night hover:shadow-neon"
      {...props}
    />
  )
}
