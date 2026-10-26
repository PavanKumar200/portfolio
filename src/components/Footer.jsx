import { motion } from 'framer-motion'
import { profile } from '../data/resume.js'
import { scrollToSection } from '../hooks/useSmoothScroll.js'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#04050c]">
      {/* marquee */}
      <div className="border-b border-white/5 py-6">
        <div className="flex w-max animate-marquee gap-0 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-0" aria-hidden={dup === 1}>
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="mx-6 font-display text-2xl font-bold uppercase tracking-wide text-transparent sm:text-3xl"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.18)',
                  }}
                >
                  Let&apos;s build something *crazy* ✦
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="flex items-center gap-2 font-display font-bold text-white sm:justify-start">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 font-mono text-sm text-[#05060f]">
              P
            </span>
            avan<span className="text-gradient">kumar</span>
          </p>
          <p className="mt-1 font-mono text-xs text-white/35">
            © {new Date().getFullYear()} {profile.name} · Built with Vite, React, Tailwind, Framer Motion, GSAP & Lenis — and AI 😊
          </p>
        </div>

        <motion.button
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' } }}
          className="glass flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-white transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
        >
          <span>Back to top</span>
          <span className="text-xl">🚀</span>
        </motion.button>
      </div>
    </footer>
  )
}
