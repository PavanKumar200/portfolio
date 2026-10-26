import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { summary } from '../data/resume.js'

const facts = [
  { icon: '📍', title: 'Based in', value: 'Bangalore, India' },
  { icon: '🎯', title: 'Currently', value: 'MCA (AI/ML) student' },
  { icon: '💼', title: 'Latest role', value: 'Agentic AI Intern' },
  { icon: '🚀', title: 'Also', value: 'Freelance Full-Stack Dev' },
  { icon: '⚖️', title: 'Strengths', value: 'Debugging · HITL · Delivery' },
  { icon: '🗣️', title: 'Speaks', value: '5 languages' },
]

const marqueeItems = [
  'Python', 'LangGraph', 'RAG', 'React.js', 'n8n', 'Flask', 'ChromaDB',
  'Tailwind', 'Scikit-Learn', 'HITL Workflows', 'Prompt Design', 'Power BI',
]

const row = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } },
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#080614]">
      {/* section tint */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/8 blur-[120px]" />

      <div className="section-pad">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="The person behind the commits."
          accent="violet"
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* summary card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glow-border glass rounded-3xl p-7 sm:p-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-xs text-cyan-300">// whoami</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <p className="text-lg leading-relaxed text-white/75">{summary}</p>
            <p className="mt-4 leading-relaxed text-white/50">
              My thing is making AI systems reliable — not just demos. At
              Innomatics I spent my days hunting accuracy gaps in
              LangGraph-orchestrated RAG pipelines and wiring in HITL escalation
              so low-confidence answers get a human checkpoint. On the side, I
              deliver live production sites for real clients and automate
              workflows that quietly save whole hours a week.
            </p>
          </motion.div>

          {/* quick facts grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((f) => (
              <motion.div
                key={f.title}
                variants={row}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass rounded-2xl p-5 transition-colors duration-300 hover:border-violet-400/40"
              >
                <div className="text-2xl">{f.icon}</div>
                <p className="mt-3 text-[11px] uppercase tracking-wider text-white/40">
                  {f.title}
                </p>
                <p className="mt-1 text-sm font-semibold text-white/85">{f.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative border-y border-white/5 bg-[#0a0620] py-5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-10" aria-hidden={dup === 1}>
              {marqueeItems.map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 font-display text-lg font-medium text-white/35"
                >
                  {item}
                  <span className="text-cyan-400/60">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
