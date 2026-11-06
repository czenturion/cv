import type { ReactNode } from 'react'
import type { ResumeContent, ResumeJob, ResumeLink } from '@/data/resume/types'

type ResumeProps = {
  content: ResumeContent
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="break-inside-avoid-page">
      <h2 className="mb-1.5 border-b border-neutral-300 pb-0.5 font-sans text-[13px] font-semibold tracking-wide text-cyan-800 uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}

function LinkRow({ links }: { links: ResumeLink[] }) {
  return (
    <ul className="flex flex-wrap gap-x-2">
      {links.map(({ label, href }, index) => (
        <li key={href}>
          {index > 0 && (
            <span aria-hidden="true" className="mr-2 text-neutral-400">
              ·
            </span>
          )}
          <a href={href} className="hover:text-cyan-800">
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function Jobs({ jobs }: { jobs: ResumeJob[] }) {
  return (
    <div className="flex flex-col gap-2">
      {jobs.map(({ company, role, period, summary, points, stack }) => (
        <article key={company} className="break-inside-avoid">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-sans font-semibold text-neutral-900">
              {company} · {role}
            </h3>
            <span className="text-neutral-500">{period}</span>
          </div>
          {summary && <p>{summary}</p>}
          {points && (
            <ul className="mt-0.5 list-disc pl-5">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
          {stack && <p className="mt-0.5 text-neutral-500 italic">{stack}</p>}
        </article>
      ))}
    </div>
  )
}

export function Resume({ content }: ResumeProps) {
  const { headings } = content

  return (
    <>
      <div className="mx-auto flex max-w-[210mm] items-center justify-between px-4 pt-6 print:hidden">
        <a
          href={import.meta.env.BASE_URL}
          className="rounded-md border border-cyan-800 px-4 py-2 text-sm font-medium text-cyan-800 hover:bg-cyan-50"
        >
          {content.backToSite}
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-md bg-cyan-800 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-900"
        >
          {content.savePdf}
        </button>
      </div>

      {/* The padding is the page margin: @page has no margin, so the browser prints no headers */}
      <main className="mx-auto my-6 flex max-w-[210mm] flex-col gap-3 bg-white px-[14mm] py-[12mm] text-[12px] leading-snug text-neutral-800 shadow-lg print:my-0 print:shadow-none">
        <header className="flex items-start justify-between gap-6">
          <div>
            <h1 className="font-sans text-3xl font-bold text-neutral-900">{content.name}</h1>
            <p className="mt-0.5 text-base font-medium text-cyan-800">{content.title}</p>
            <div className="mt-2 flex flex-col gap-0.5 text-neutral-600">
              <p>
                {content.location} · {content.workPermit}
              </p>
              <LinkRow links={content.contacts} />
              <LinkRow links={content.links} />
            </div>
          </div>
          {content.photo && (
            <img
              src={content.photo}
              alt={content.name}
              className="aspect-square w-[28mm] shrink-0 rounded-full object-cover object-[center_25%]"
            />
          )}
        </header>

        <Section title={headings.about}>
          <p>{content.about}</p>
        </Section>

        <Section title={headings.skills}>
          <ul>
            {content.skills.map(({ title, items }) => (
              <li key={title}>
                <span className="font-semibold">{title}:</span> {items}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={headings.experience}>
          <Jobs jobs={content.experience} />
        </Section>

        <Section title={headings.projects}>
          <ul className="flex flex-col gap-1">
            {content.projects.map(({ title, description, stack, links }) => (
              <li key={title}>
                <span className="font-semibold">{title}</span> — {description}{' '}
                <span className="text-neutral-500 italic">{stack}.</span>{' '}
                {links.map(({ label, href }, index) => (
                  <span key={href}>
                    {index > 0 && ' · '}
                    <a href={href} className="text-cyan-800 underline">
                      {label}
                    </a>
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={headings.otherExperience}>
          <Jobs jobs={content.otherExperience} />
        </Section>

        <Section title={headings.education}>
          <ul className="flex flex-col gap-1">
            {content.education.map(({ place, period, details }) => (
              <li key={place}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <span className="font-semibold">{place}</span>
                  <span className="text-neutral-500">{period}</span>
                </div>
                {details && <p>{details}</p>}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={headings.achievements}>
          <ul className="list-disc pl-5">
            {content.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </Section>

        <Section title={headings.languages}>
          <p>{content.languages}</p>
        </Section>
      </main>
    </>
  )
}
