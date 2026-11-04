export function Tag({ children }: { children: string }) {
  return (
    <li className="rounded-md border border-white/10 px-2.5 py-1 text-sm text-white/70">
      {children}
    </li>
  )
}
