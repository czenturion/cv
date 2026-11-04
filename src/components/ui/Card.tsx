import type { ComponentProps, ReactNode } from 'react'

type CardProps = ComponentProps<'li'> & {
  title: string
  media?: ReactNode
}

export function Card({ title, media, children, className = '', ...rest }: CardProps) {
  return (
    <li
      className={`rounded-xl border border-white/10 bg-card p-5 transition hover:-translate-y-1 hover:border-neon-cyan/60 hover:shadow-neon-sm ${className}`}
      {...rest}
    >
      {media}
      <h3 className="font-semibold text-neon-cyan">{title}</h3>
      {children}
    </li>
  )
}
