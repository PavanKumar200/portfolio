import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticButton({ children, strength = 0.35, className = '', as = 'a', ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16 })
  const sy = useSpring(y, { stiffness: 220, damping: 16 })

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
