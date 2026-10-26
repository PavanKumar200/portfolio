import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 })
  const dotX = useSpring(x, { stiffness: 1800, damping: 60 })
  const dotY = useSpring(y, { stiffness: 1800, damping: 60 })

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      setEnabled(true)
      document.documentElement.classList.add('cursor-enabled')
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = document.elementFromPoint(e.clientX, e.clientY)
      const interactive =
        el && el.closest('a, button, [data-cursor="pointer"], input, textarea')
      setHovering(Boolean(interactive))
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}
