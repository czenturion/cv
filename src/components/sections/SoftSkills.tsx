import { Card } from '@/components/ui/Card'
import { profile } from '@/data/profile'

export function SoftSkills() {
  return (
    <section id="soft-skills" className="mx-auto flex max-w-4xl flex-col gap-6 px-5 pb-20 md:px-8">
      <h2 className="text-2xl font-semibold text-neon-cyan">Soft Skills & Values</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {profile.softSkills.map(({ title, text }) => (
          <Card key={title} title={title}>
            <p className="mt-1 text-white/70">{text}</p>
          </Card>
        ))}
      </ul>
    </section>
  )
}
