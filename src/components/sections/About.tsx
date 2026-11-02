import photo from '@/assets/photo.jpg'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { GithubIcon } from '@/components/ui/GithubIcon'
import { profile } from '@/data/profile'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-5 pt-20 md:px-8">
      <div className="flex flex-col items-center gap-8 border-b border-white/10 pb-14 sm:flex-row sm:justify-between sm:gap-12">
        <img
          src={photo}
          alt={`${profile.name}, frontend developer`}
          className="aspect-square w-40 shrink-0 rounded-full border-3 border-neon-cyan object-cover object-[center_25%] shadow-neon sm:w-52 md:w-64"
        />
        <div className="flex flex-col gap-3 text-center sm:text-right">
          <h1 className="text-4xl font-bold text-neon-cyan text-shadow-neon md:text-6xl">
            {profile.name}
          </h1>
          <p className="text-xl font-medium md:text-2xl">{profile.headline}</p>
          <p className="text-white/70">{profile.meta}</p>
          <div className="mt-3 grid w-full grid-cols-2 gap-4">
            <ButtonLink href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon className="size-5" />
              GitHub
            </ButtonLink>
            <ButtonLink href="#contact">Contact</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
