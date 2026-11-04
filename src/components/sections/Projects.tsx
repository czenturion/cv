import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <section id="projects" className="mx-auto flex max-w-4xl flex-col gap-6 px-5 pb-20 md:px-8">
      <h2 className="text-2xl font-semibold text-neon-cyan">Projects</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
    </section>
  )
}
