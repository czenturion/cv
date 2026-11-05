import { Card } from '@/components/ui/Card'
import { achievements } from '@/data/achievements'

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto flex max-w-4xl flex-col gap-6 px-5 pb-20 md:px-8">
      <h2 className="text-2xl font-semibold text-neon-cyan">Achievements</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {achievements.map(({ title, event, details, video, videoLabel }) => (
          <Card
            key={title}
            title={title}
            media={
              <video
                src={video}
                aria-label={videoLabel}
                autoPlay={!reduceMotion}
                controls={reduceMotion}
                muted
                loop
                playsInline
                className="mb-4 aspect-16/10 w-full rounded-lg border border-white/10 bg-night object-cover"
              />
            }
          >
            <p className="mt-1 text-sm text-white/50">{event}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
              {details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </ul>
    </section>
  )
}
