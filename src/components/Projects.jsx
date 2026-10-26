import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data/resume.js'

const accents = {
  purple: {
    gradient: 'from-violet-500/25 via-fuchsia-500/10 to-transparent',
    text: 'text-violet-300',
    ring: 'ring-violet-400/40',
  },
  pink: {
    gradient: 'from-pink-500/25 via-rose-500/10 to-transparent',
    text: 'text-pink-300',
    ring: 'ring-pink-400/40',
  },
  lime: {
    gradient: 'from-lime-500/25 via-emerald-500/10 to-transparent',
    text: 'text-lime-300',
    ring: 'ring-lime-400/40',
  },
}

function TiltCard({ project, index }) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const rx = useSpring(useTransform(my, [0, 1], [9, -9]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 200, damping: 20 })
  const a = accents[project.accent]

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }
  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.75,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1100 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 240 }}
        className="glass group relative h-full overflow-hidden rounded-3xl p-7 sm:p-9"
      >
        {/* cursor tracking glow */}
        <GlowFollow refEl={ref} />
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        <div style={{ transform: 'translateZ(40px)' }} className="relative">
          <div className="flex items-start justify-between">
            <motion.div
              whileHover={{ rotate: [0, -12, 10, 0], scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl ring-1 ring-white/10"
            >
              {project.emoji}
            </motion.div>
            <span
              className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest ring-1 ${a.text} ${a.ring}`}
            >
              Project {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className="mt-6 font-display text-2xl font-bold text-white">
            {project.title}
          </h3>
          <p className={`mt-1 font-mono text-xs ${a.text}`}>— {project.tagline}</p>

          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {project.description}
          </p>

          {/* highlight badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`mt-5 inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 ring-1 ${a.ring}`}
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
              Highlight
            </span>
            <span className="text-sm font-semibold text-white">{project.highlight}</span>
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-white/5 px-3 py-1.5 font-mono text-[11px] text-white/55 ring-1 ring-white/10 transition-colors hover:text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function GlowFollow({ refEl }) {
  const x = useMotionValue(50)
  const y = useMotionValue(50)
  const bg = useTransform(
    [x, y],
    ([px, py]) =>
      `radial-gradient(280px circle at ${px}% ${py}%, rgba(139,180,255,0.14), transparent 65%)`,
  )

  const onMouseMove = (e) => {
    const rect = refEl.current.getBoundingClientRect()
    x.set(((e.clientX - rect.left) / rect.width) * 100)
    y.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      style={{ background: bg }}
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#031033]">
      <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/12 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-lime-500/8 blur-[130px]" />

      <div className="section-pad">
        <SectionHeading
          number="04"
          title="Projects"
          subtitle="Three builds. Each one solves a problem I actually had."
          accent="lime"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <TiltCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
