import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { navLinks, profile } from '../data/resume.js'
import { scrollToSection } from '../hooks/useSmoothScroll.js'

export default function Navbar({ ready }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  useEffect(() => {
    if (!ready) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ready])

  const go = (id) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/5 bg-[#05060f]/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => go('hero')}
            className="group flex items-center gap-2 font-display text-lg font-bold"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 font-mono text-sm text-[#05060f] transition-transform duration-300 group-hover:rotate-[360deg]">
              P
            </span>
            <span className="text-white">
              avan
              <span className="text-gradient">kumar</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(1).map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active === id ? 'text-white' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/8 ring-1 ring-cyan-400/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                go('contact')
              }}
              className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-semibold text-[#05060f] sm:block"
            >
              <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative">Let&apos;s Talk</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-6 bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-6 bg-white"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(140% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-[#070812]/95 backdrop-blur-2xl lg:hidden"
          >
            {navLinks.map(({ id, label }, i) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                onClick={() => go(id)}
                className={`font-display text-3xl font-bold transition-colors ${
                  active === id ? 'text-gradient' : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
              </motion.button>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.6 }}
              className="mt-8 font-mono text-xs text-white/50"
            >
              {profile.email}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
