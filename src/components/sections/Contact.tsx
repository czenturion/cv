import { Card } from '@/components/ui/Card'
import { contacts } from '@/data/contacts'

export function Contact() {
  return (
    <section id="contact" className="mx-auto flex max-w-4xl flex-col gap-6 px-5 pb-20 md:px-8">
      <div>
        <h2 className="text-2xl font-semibold text-neon-cyan">Get in Touch</h2>
        <p className="mt-1 text-white/70">Open to opportunities</p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {contacts.map(({ title, value, href, icon: Icon }) => (
          // Two columns: title and link on the left, icon on the right across both rows
          <Card
            key={title}
            title={title}
            className="group relative grid grid-cols-[1fr_auto] items-center gap-x-4"
          >
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="mt-1 block break-words text-white/70 after:absolute after:inset-0"
            >
              {value}
            </a>
            <Icon className="col-start-2 row-span-2 row-start-1 size-7 text-neon-cyan/60 transition group-hover:text-neon-cyan" />
          </Card>
        ))}
      </ul>
    </section>
  )
}
