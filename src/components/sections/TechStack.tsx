import { useEffect, useRef, type PointerEvent } from 'react'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { stack } from '@/data/stack'

const ANGLE_STEP = 360 / stack.length
const AUTO_SPEED = 0.012
const DRAG_SPEED = 0.3

export function TechStack() {
  const areaRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLUListElement>(null)
  const angleRef = useRef(0)
  const isHoveredRef = useRef(false)
  const dragXRef = useRef<number | null>(null)

  useEffect(() => {
    const autoRotate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let prevTime = performance.now()

    const tick = (time: number) => {
      if (autoRotate && !isHoveredRef.current) {
        angleRef.current -= (time - prevTime) * AUTO_SPEED
      }
      prevTime = time
      if (ringRef.current) {
        ringRef.current.style.transform = `translateZ(calc(var(--radius) * -1)) rotateY(${angleRef.current}deg)`
      }
      frameId = requestAnimationFrame(tick)
    }

    let frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [])

  useEffect(() => {
    const area = areaRef.current
    if (!area) return

    let startX = 0
    let startY = 0
    let direction: 'x' | 'y' | null = null

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      direction = null
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (direction === null) {
        const dx = Math.abs(e.touches[0].clientX - startX)
        const dy = Math.abs(e.touches[0].clientY - startY)
        direction = dx > dy ? 'x' : 'y'
      }
      if (direction === 'x' && e.cancelable) e.preventDefault()
    }

    area.addEventListener('touchstart', handleTouchStart, { passive: true })
    area.addEventListener('touchmove', handleTouchMove, { passive: false })
    return () => {
      area.removeEventListener('touchstart', handleTouchStart)
      area.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragXRef.current = e.clientX
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragXRef.current === null) return
    angleRef.current += (e.clientX - dragXRef.current) * DRAG_SPEED
    dragXRef.current = e.clientX
  }

  const stopDrag = () => {
    dragXRef.current = null
  }

  return (
    <section id="tech-stack" className="mx-auto flex max-w-4xl flex-col gap-6 px-5 py-10 md:px-8">
      <h2 className="text-2xl font-semibold text-neon-cyan">Tech Stack</h2>
      <div
        ref={areaRef}
        className="relative h-80 cursor-grab touch-pan-y overflow-hidden select-none perspective-[1200px] active:cursor-grabbing md:h-64"
        onPointerEnter={() => (isHoveredRef.current = true)}
        onPointerLeave={() => (isHoveredRef.current = false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        <ul
          ref={ringRef}
          className="absolute top-1/2 left-1/2 [--radius:380px] transform-3d md:[--radius:540px]"
        >
          {stack.map(({ title, items }, index) => (
            <Card
              key={title}
              title={title}
              className="absolute -mt-32 -ml-36 h-64 w-72 backface-hidden md:-mt-26 md:-ml-48 md:h-52 md:w-96"
              style={{ transform: `rotateY(${index * ANGLE_STEP}deg) translateZ(var(--radius))` }}
            >
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  )
}
