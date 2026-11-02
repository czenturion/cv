import type { CSSProperties, ReactNode } from 'react'

type CardProps = {
  title: string
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function Card({ title, children, className = '', style }: CardProps) {
  return (
    <li
      className={`rounded-xl border border-white/10 bg-card p-5 transition hover:-translate-y-1 hover:border-neon-cyan/60 hover:shadow-neon-sm ${className}`}
      style={style}
    >
      <h3 className="font-semibold text-neon-cyan">{title}</h3>
      {children}
    </li>
  )
}
