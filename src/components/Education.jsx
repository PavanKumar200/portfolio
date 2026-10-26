import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { education, certifications, extras } from '../data/resume.js'

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#0b0a07]">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-amber-500/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="section-pad">
        <SectionHeading
          number="05"
          title="Education & Beyond"
          subtitle="Degrees, certificates and the languages I think in."
          accent="amber"
        />

        {/* education cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {education.map((ed) => (
            <motion.div
              key={ed.degree}
              variants={{
                hidden: { opacity: 0, y: 44 },
                show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } },
              }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition-colors duration-300 hover:border-amber-400/40"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-2xl ring-1 ring-amber-400/30"
              >
                {ed.icon}
              </motion.div>
              <h3 className="mt-5 font-display text-lg font-bold text-white sm:text-xl">
                {ed.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-amber-300/90">{ed.school}</p>
              <p className="mt-3 text-sm text-white/55">{ed.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* certifications */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3 font-mono text-sm text-white/40"
          >
            🏅 <span className="uppercase tracking-[0.25em]">Certifications</span>
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 160, damping: 16 } },
                }}
                whileHover={{ y: -5, rotate: -1.5 }}
                className="glass rounded-2xl p-5 transition-colors duration-300 hover:border-lime-400/40"
              >
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold leading-snug text-white/90">
                    {cert.name}
                  </p>
                  <span className="shrink-0 font-mono text-[10px] text-lime-300/80">✓</span>
                </div>
                <p className="mt-2 font-mono text-xs text-white/40">{cert.org}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* languages + hobbies */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-5 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.25em] text-white/40">
              🌍 Languages
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {extras.languages.map((lang, i) => (
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ delay: i * 0.07, type: 'spring', stiffness: 250 }}
                  className="rounded-full bg-gradient-to-r from-amber-400/10 to-violet-400/10 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/15 hover:ring-amber-400/50"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-5 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.25em] text-white/40">
              🎈 Off the Keyboard
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {extras.hobbies.map((hob, i) => (
                <motion.span
                  key={hob}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, rotate: -2 }}
                  transition={{ delay: i * 0.07, type: 'spring', stiffness: 250 }}
                  className="rounded-full bg-gradient-to-r from-cyan-400/10 to-pink-400/10 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/15 hover:ring-cyan-400/50"
                >
                  {hob}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
