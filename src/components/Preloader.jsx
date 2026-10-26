import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer)
          return 100
        }
        return Math.min(100, p + Math.ceil(Math.random() * 9))
      })
    }, 90)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => {
        setGone(true)
        setTimeout(onDone, 750)
      }, 450)
      return () => clearTimeout(t)
    }
  }, [progress, onDone])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05060f]"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
        >
          <motion.div
            className="absolute h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs tracking-[0.4em] text-cyan-400/80"
          >
            INITIALIZING PORTFOLIO
          </motion.p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
            <span className="text-shimmer">Pavankumar&nbsp;S</span>
          </h1>
          <div className="mt-10 h-[3px] w-64 overflow-hidden rounded-full bg-white/10 sm:w-80">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 font-mono text-sm text-violet-300/90">
            {String(Math.floor(progress)).padStart(3, '0')}%
          </p>
          <div className="mt-8 flex gap-2 text-[10px] font-mono text-white/30">
            <span>tailwind.config loaded</span>
            <span>•</span>
            <span>gsap registered</span>
            <span>•</span>
            <span>lenis spinning up</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
