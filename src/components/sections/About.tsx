import photo from '@/assets/photo.jpg'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { GithubIcon } from '@/components/ui/GithubIcon'
import { profile } from '@/data/profile'

export function About() {
  return (
    <section id="about" className="mx-auto flex max-w-4xl flex-col gap-14 px-5 py-20 md:px-8">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:gap-12">
        <img
          src={photo}
          alt={`${profile.name}, frontend developer`}
          className="aspect-square w-40 shrink-0 rounded-full border-3 border-neon-cyan object-cover object-[center_25%] shadow-neon sm:w-52 md:w-64"
        />
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h1 className="text-4xl font-bold text-neon-cyan text-shadow-neon md:text-6xl">
            {profile.name}
          </h1>
          <p className="text-xl font-medium md:text-2xl">{profile.headline}</p>
          <p className="text-white/70">{profile.meta}</p>
          <div className="mx-auto mt-3 grid w-fit grid-cols-2 gap-4 sm:mx-0">
            <ButtonLink href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon className="size-5" />
              GitHub
            </ButtonLink>
            <ButtonLink href="#contact">Contact</ButtonLink>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 border-t border-white/10 pt-10">
        <h2 className="text-2xl font-semibold text-neon-cyan">Soft Skills & Values</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {profile.softSkills.map(({ title, text }) => (
            <li
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-neon-cyan/60 hover:shadow-neon-sm"
            >
              <h3 className="font-semibold text-neon-cyan">{title}</h3>
              <p className="mt-1 text-white/70">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
