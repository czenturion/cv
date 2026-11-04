import { Card } from '@/components/ui/Card'
import { GithubIcon } from '@/components/ui/GithubIcon'
import { projects } from '@/data/projects'

const linkClass = 'inline-flex items-center gap-1.5 font-medium transition hover:text-neon-cyan'

export function Projects() {
  return (
    <section id="projects" className="mx-auto flex max-w-4xl flex-col gap-6 px-5 pb-20 md:px-8">
      <h2 className="text-2xl font-semibold text-neon-cyan">Projects</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map(({ title, task, done, stack, demo, code }) => (
          <Card key={title} title={title} className="flex flex-col">
            <p className="mt-1 text-white/70">{task}</p>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
              {done.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2">
              {stack.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-white/10 px-2.5 py-1 text-sm text-white/70"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex gap-6 pt-5">
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer" className={linkClass}>
                  Demo ↗
                </a>
              )}
              <a href={code} target="_blank" rel="noreferrer" className={linkClass}>
                <GithubIcon className="size-4" />
                Code
              </a>
            </div>
          </Card>
        ))}
      </ul>
    </section>
  )
}
