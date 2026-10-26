import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import MagneticButton from './MagneticButton.jsx'
import { profile } from '../data/resume.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#05060f]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/12 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-0 h-80 w-80 rounded-full bg-pink-500/8 blur-[120px]" />

      <div className="section-pad relative">
        <SectionHeading
          number="06"
          title="Contact Me"
          subtitle="Deadlines don't scare me. Your inbox is next."
          accent="pink"
        />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glow-border glass relative flex flex-col justify-center rounded-3xl p-8 sm:p-12"
          >
            <p className="font-mono text-xs tracking-[0.35em] text-cyan-300/80">LET&apos;S BUILD</p>
            <h3 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Have a project or an <span className="text-gradient">AI/ML problem</span>?
              Let&apos;s talk.
            </h3>
            <p className="mt-4 max-w-md text-white/50">
              I&apos;m open to internships, freelance builds and collaboration on
              AI-automation ideas. The fastest way to reach me is email — I reply
              within a day.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton
                as="button"
                onClick={copyEmail}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-7 py-3.5 font-semibold text-[#05060f] shadow-[0_0_40px_-8px_rgba(244,114,182,0.6)]"
              >
                <motion.span
                  animate={copied ? { rotate: 360 } : {}}
                  transition={{ duration: 0.4 }}
                  className="relative mr-2 inline-block"
                >
                  {copied ? '✅' : '📋'}
                </motion.span>
                <motion.span layout className="relative">
                  {copied ? 'Copied to clipboard!' : 'Copy my email'}
                </motion.span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href={`mailto:${profile.email}`}
                className="glass rounded-full px-7 py-3.5 font-semibold text-white transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
              >
                or mail me directly ↗
              </MagneticButton>
            </div>
          </motion.div>

          {/* contact details */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-col gap-4"
          >
            {[
              { icon: '✉️', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              {
                icon: '📞',
                label: 'Phone',
                value: 'Hidden — tap the ☎️ icon to call',
                href: `tel:${profile.phone.replace(/\s/g, '')}`,
              },
              { icon: '📍', label: 'Location', value: profile.location, href: null },
            ].map((item) => (
              <motion.a
                key={item.label}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 130, damping: 18 } },
                }}
                whileHover={{ x: 6 }}
                href={item.href ?? undefined}
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-violet-400/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-white/40">
                    {item.label}
                  </span>
                  <span className="block truncate text-sm font-medium text-white/85">
                    {item.value}
                  </span>
                </span>
              </motion.a>
            ))}

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '👨‍💼', label: 'LinkedIn', href: profile.linkedin },
                { icon: '🐙', label: 'GitHub', href: profile.github },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 130, damping: 18 } },
                  }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex items-center gap-3 rounded-2xl p-5 transition-colors hover:border-cyan-400/40"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-sm font-semibold text-white/85">{s.label}</span>
                  <span className="ml-auto text-white/25 transition-all group-hover:translate-x-0.5">↗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
