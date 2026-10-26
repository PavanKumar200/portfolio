import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from './SectionHeading.jsx'
import { experience } from '../data/resume.js'

gsap.registerPlugin(ScrollTrigger)

const dotColors = {
  purple: 'bg-violet-400 shadow-[0_0_18px_4px_rgba(167,139,250,0.55)]',
  cyan: 'bg-cyan-400 shadow-[0_0_18px_4px_rgba(34,211,238,0.55)]',
  pink: 'bg-pink-400 shadow-[0_0_18px_4px_rgba(244,114,182,0.55)]',
  amber: 'bg-amber-400 shadow-[0_0_18px_4px_rgba(251,191,36,0.55)]',
}

export default function Experience() {
  const wrapRef = useRef(null)
  const lineRef = useRef(null)
  const cardRefs = useRef([])
  const dotRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // draw the gradient line as we scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top 70%',
            end: 'bottom 55%',
            scrub: 0.6,
          },
        },
      )

      cardRefs.current.forEach((card) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotate: card.dataset.side === 'right' ? 1.5 : -1.5 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          },
        )
        gsap.fromTo(
          card.querySelectorAll('.xp-tag'),
          { opacity: 0, y: 12, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.06,
            duration: 0.5,
            ease: 'back.out(1.8)',
            scrollTrigger: { trigger: card, start: 'top 70%' },
          },
        )
      })
      dotRefs.current.forEach((dot) => {
        if (!dot) return
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.55,
            ease: 'back.out(2.4)',
            scrollTrigger: { trigger: dot, start: 'top 88%' },
          },
        )
      })
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="relative overflow-hidden bg-[#0c0512]">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[440px] w-[440px] rounded-full bg-pink-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="section-pad">
        <SectionHeading
          number="03"
          title="Experience"
          subtitle="Scroll — the timeline fills as you go."
          accent="pink"
        />

        <div ref={wrapRef} className="relative">
          {/* rail */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-white/8 sm:left-1/2 sm:-translate-x-1/2">
            <div
              ref={lineRef}
              className="timeline-line h-full w-full origin-top rounded-full"
            />
          </div>

          <div className="space-y-14 sm:space-y-20">
            {experience.map((job, i) => {
              const right = i % 2 === 1
              return (
                <div
                  key={job.id}
                  className={`relative flex sm:items-center ${
                    right ? 'sm:justify-end' : 'sm:justify-start'
                  }`}
                >
                  {/* node */}
                  <div
                    className={`absolute left-4 top-6 z-10 -translate-x-1/2 sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2`}
                  >
                    <span
                      ref={(el) => (dotRefs.current[i] = el)}
                      className={`block h-4 w-4 rounded-full ring-4 ring-[#0c0512] ${dotColors[job.color]}`}
                    />
                  </div>

                  {/* card */}
                  <div
                    ref={(el) => (cardRefs.current[i] = el)}
                    data-side={right ? 'right' : 'left'}
                    className="reveal-item ml-12 max-w-xl sm:ml-0 sm:w-[46%]"
                  >
                    <div className="glass group rounded-3xl p-6 transition-all duration-300 hover:border-white/20 sm:p-7">
                      <p className="font-mono text-xs text-white/40">{job.period}</p>
                      <h3 className="mt-1.5 font-display text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                        {job.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-violet-300/90">
                        {job.org}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {job.points.map((pt, j) => (
                          <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-white/60">
                            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400/70" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="xp-tag rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/55 ring-1 ring-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
