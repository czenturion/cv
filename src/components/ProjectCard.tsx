import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { GithubIcon } from '@/components/ui/GithubIcon'
import { ArrowUpRightIcon } from '@/components/ui/LineIcons'
import { Tag } from '@/components/ui/Tag'
import type { Project, Screenshot } from '@/data/projects'
import { useInView } from '@/hooks/useInView'
import { useRotatingIndex } from '@/hooks/useRotatingIndex'

const canHover = window.matchMedia('(hover: hover)').matches
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const HOVER_INTERVAL = 2000 // ms
const AUTO_INTERVAL = 5000 // ms

const linkClass = 'inline-flex items-center gap-1.5 font-medium transition hover:text-neon-cyan'

export function ProjectCard({ title, task, done, stack, images, demo, code }: Project) {
  const [isHovered, setIsHovered] = useState(false)
  const [ref, inView] = useInView<HTMLLIElement>()

  const isActive = !reduceMotion && (canHover ? isHovered : inView)
  const [index, setIndex] = useRotatingIndex(
    images.length,
    canHover ? HOVER_INTERVAL : AUTO_INTERVAL,
    isActive
  )

  return (
    <Card
      ref={ref}
      title={title}
      className="flex flex-col"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      media={<Screenshots title={title} images={images} index={index} onSelect={setIndex} />}
    >
      <p className="mt-1 text-white/70">{task}</p>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
        {done.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </ul>

      <div className="mt-auto flex gap-6 pt-5">
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className={linkClass}>
            Demo
            <ArrowUpRightIcon className="size-4" />
          </a>
        )}
        <a href={code} target="_blank" rel="noreferrer" className={linkClass}>
          <GithubIcon className="size-4" />
          Code
        </a>
      </div>
    </Card>
  )
}

type ScreenshotsProps = {
  title: string
  images: Screenshot[]
  index: number
  onSelect: (index: number) => void
}

function Screenshots({ title, images, index, onSelect }: ScreenshotsProps) {
  return (
    <div className="relative mb-4 aspect-16/10 overflow-hidden rounded-lg border border-white/10 bg-night">
      {images.length === 0 ? (
        <span className="absolute inset-0 grid place-items-center font-display text-lg text-neon-cyan/40">
          {title}
        </span>
      ) : (
        images.map(({ src, alt }, i) => (
          <img
            key={src}
            src={src}
            alt={alt}
            width={1200}
            height={750}
            loading="lazy"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))
      )}

      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-1 flex justify-center">
          {images.map(({ src }, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === index}
              onClick={() => onSelect(i)}
              className="p-1.5"
            >
              <span
                className={`block size-2 rounded-full transition ${i === index ? 'bg-neon-cyan' : 'bg-white/40 hover:bg-white/70'}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
