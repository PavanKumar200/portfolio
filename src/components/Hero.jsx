import { motion } from 'framer-motion'
import ParticleField from './ParticleField.jsx'
import TypingText from './TypingText.jsx'
import MagneticButton from './MagneticButton.jsx'
import { profile, typedRoles, heroStats } from '../data/resume.js'
import { scrollToSection } from '../hooks/useSmoothScroll.js'

const nameChars = 'PAVANKUMAR S'.split('')

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
}
const char = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

export default function Hero({ ready }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* backdrops */}
      <ParticleField />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-600/12 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-120px] h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-120px] top-1/3 h-96 w-96 rounded-full bg-pink-500/8 blur-[120px]" />

      {/* grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.5) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)',
        }}
      />

      <motion.div
        initial="hidden"
        animate={ready ? 'show' : 'hidden'}
        variants={container}
        className="relative z-10 mx-auto max-w-5xl px-5 pb-24 pt-32 text-center sm:px-8"
      >
        <motion.div variants={char} className="mb-6 inline-flex items-center gap-2">
          <span className="glass rounded-full px-4 py-1.5 font-mono text-xs text-white/70">
            <span className="mr-2 inline-block h-2 w-2 animate-pulseGlow rounded-full bg-lime-400" />
            Open to AI/ML & Full-Stack roles
          </span>
        </motion.div>

        <h1 className="font-display text-[13vw] font-bold leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
          <span className="sr-only">Pavankumar S</span>
          {nameChars.map((c, i) => (
            <motion.span
              key={i}
              variants={char}
              className={`inline-block ${c === ' ' ? 'w-2' : ''}`}
              style={{
                background:
                  'linear-gradient(135deg, #fff 30%, #9beaff 55%, #c7b6ff 80%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                marginRight: c === ' ' ? '0.35em' : 0,
              }}
            >
              {c === ' ' ? '' : c}
            </motion.span>
          ))}
        </h1>

        <motion.div variants={char} className="mt-5 font-mono text-sm sm:text-base">
          <span className="text-white/40">$</span>{' '}
          <span className="text-white/80">{profile.role} ·</span>{' '}
          <span className="font-semibold text-cyan-300">
            <TypingText words={typedRoles} />
          </span>
        </motion.div>

        <motion.p
          variants={char}
          className="mx-auto mt-6 max-w-xl text-balance text-white/55"
        >
          I build AI assistants that know when to ask a human for help — and ship
          full-stack products that real clients run on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={char}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            as="button"
            onClick={() => scrollToSection('projects')}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 font-semibold text-[#05060f] shadow-[0_0_40px_-8px_rgba(34,211,238,0.6)]"
          >
            <span className="absolute inset-0 translate-y-full bg-white/90 transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative">See My Work ↓</span>
          </MagneticButton>
          <MagneticButton
            as="button"
            onClick={() => scrollToSection('contact')}
            className="glass group rounded-full px-8 py-3.5 font-semibold text-white transition-colors duration-300 hover:border-pink-400/50 hover:text-pink-300"
          >
            Get in Touch <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </MagneticButton>
        </motion.div>

        {/* stats */}
        <motion.div
          variants={char}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`glass rounded-2xl px-4 py-4 ${
                i === 0 ? 'ring-1 ring-cyan-400/30' : ''
              }`}
            >
              <p
                className={`font-display text-2xl font-bold sm:text-3xl ${
                  i % 2 === 0 ? 'text-cyan-300' : 'text-violet-300'
                }`}
              >
                {s.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-white/45">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.button
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="block h-2 w-1 rounded-full bg-cyan-400"
          />
        </div>
      </motion.button>
    </section>
  )
}
