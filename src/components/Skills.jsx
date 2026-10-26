import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { skillCategories } from '../data/resume.js'

const accentMap = {
  cyan: { chip: 'ring-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10', dot: 'bg-cyan-400', bar: 'from-cyan-400 to-cyan-200' },
  amber: { chip: 'ring-amber-400/30 text-amber-300 hover:bg-amber-400/10', dot: 'bg-amber-400', bar: 'from-amber-400 to-yellow-200' },
  purple: { chip: 'ring-violet-400/30 text-violet-300 hover:bg-violet-400/10', dot: 'bg-violet-400', bar: 'from-violet-400 to-fuchsia-200' },
  pink: { chip: 'ring-pink-400/30 text-pink-300 hover:bg-pink-400/10', dot: 'bg-pink-400', bar: 'from-pink-400 to-rose-200' },
  lime: { chip: 'ring-lime-400/30 text-lime-300 hover:bg-lime-400/10', dot: 'bg-lime-400', bar: 'from-lime-400 to-green-200' },
}

const glowMap = {
  cyan: 'bg-cyan-500/0 group-hover:bg-cyan-500/15',
  amber: 'bg-amber-500/0 group-hover:bg-amber-500/15',
  purple: 'bg-violet-500/0 group-hover:bg-violet-500/15',
  pink: 'bg-pink-500/0 group-hover:bg-pink-500/15',
  lime: 'bg-lime-500/0 group-hover:bg-lime-500/15',
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#04091a]">
      <div className="pointer-events-none absolute -right-32 top-24 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-[380px] w-[380px] rounded-full bg-violet-600/10 blur-[110px]" />

      <div className="section-pad">
        <SectionHeading
          number="02"
          title="Technical Skills"
          subtitle="Hover a card to feel it. Everything below has shipped real work."
          accent="cyan"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((cat, i) => {
            const a = accentMap[cat.accent]
            return (
              <motion.div
                key={cat.id}
                variants={{
                  hidden: { opacity: 0, y: 44, scale: 0.97 },
                  show: {
                    opacity: 1, y: 0, scale: 1,
                    transition: { type: 'spring', stiffness: 130, damping: 18 },
                  },
                }}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260 }}
                className={`glass group relative overflow-hidden rounded-3xl p-7 ${
                  i === 0 ? 'xl:row-span-2' : ''
                }`}
              >
                {/* hover glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-[60px] transition-all duration-500 ${glowMap[cat.accent]}`}
                />

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110">
                    {cat.icon}
                  </div>
                  <span className={`mt-2 h-2.5 w-2.5 rounded-full ${a.dot} animate-pulseGlow`} />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {cat.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-white/40">{cat.blurb}</p>

                {/* chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + j * 0.05, type: 'spring', stiffness: 260 }}
                      whileHover={{ scale: 1.12, rotate: -2 }}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 ${a.chip}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* bars */}
                {cat.bars && (
                  <div className="mt-6 space-y-3">
                    {Object.entries(cat.bars).map(([name, val], j) => (
                      <div key={name}>
                        <div className="mb-1 flex justify-between text-[11px] font-mono">
                          <span className="text-white/55">{name}</span>
                          <span className="text-white/40">{val}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${val}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.1,
                              delay: 0.3 + j * 0.15,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`h-full rounded-full bg-gradient-to-r ${a.bar}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
