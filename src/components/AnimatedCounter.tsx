import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(Math.round(v))
      },
    })
    return () => controls.stop()
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {Intl.NumberFormat('en-US').format(display)}{suffix}
    </span>
  )
}
