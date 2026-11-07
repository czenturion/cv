import { Card } from '@/components/ui/Card'
import { howIWork } from '@/data/howIWork'

export function HowIWork() {
  return (
    <section id="how-i-work" className="mx-auto flex max-w-4xl flex-col gap-6 px-5 pb-20 md:px-8">
      <h2 className="text-2xl font-semibold text-neon-cyan">How I Work</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {howIWork.map(({ title, context, text }) => (
          <Card key={title} title={title}>
            <p className="mt-1 text-sm text-white/50">{context}</p>
            <p className="mt-3 text-white/70">{text}</p>
          </Card>
        ))}
      </ul>
    </section>
  )
}
