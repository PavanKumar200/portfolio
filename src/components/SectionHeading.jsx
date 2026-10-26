import { motion } from 'framer-motion'

const accentClasses = {
  cyan: 'text-cyan-400 bg-cyan-400',
  violet: 'text-violet-400 bg-violet-400',
  pink: 'text-pink-400 bg-pink-400',
  amber: 'text-amber-400 bg-amber-400',
  lime: 'text-lime-400 bg-lime-400',
}

export default function SectionHeading({ number, title, subtitle, accent = 'cyan' }) {
  const words = title.split(' ')
  const [accentText, accentBg] = (accentClasses[accent] || accentClasses.cyan).split(' ')

  return (
    <div className="mb-14 sm:mb-20">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="flex items-center gap-3 font-mono text-xs tracking-[0.35em] text-white/40"
      >
        <span className={accentText}>{number}</span>
        <span className="h-px w-12 bg-gradient-to-r from-current to-transparent" />
        <span className="uppercase">Portfolio</span>
      </motion.div>

      <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30, rotateX: -60 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mr-3 inline-block"
          >
            {i === words.length - 1 ? (
              <span className="text-gradient">{word}</span>
            ) : (
              <span className="text-white">{word}</span>
            )}
          </motion.span>
        ))}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-3 max-w-xl text-white/50"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        className={`mt-6 h-1 w-24 rounded-full ${accentBg}`}
      />
    </div>
  )
}
