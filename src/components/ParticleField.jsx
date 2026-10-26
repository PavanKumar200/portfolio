import { useEffect, useRef } from 'react'

const COLORS = ['#22d3ee', '#a78bfa', '#f472b6']

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let particles = []
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(90, Math.floor(canvas.offsetWidth / 16))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const LINK_DIST = 130
    const MOUSE_DIST = 170

    const tick = () => {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)

      for (const p of particles) {
        // gentle drift + mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.hypot(dx, dy)
        if (dist < MOUSE_DIST && dist > 0.001) {
          const f = ((MOUSE_DIST - dist) / MOUSE_DIST) * 0.6
          p.vx += (dx / dist) * f * 0.12
          p.vy += (dy / dist) * f * 0.12
        }
        p.vx *= 0.985
        p.vy *= 0.985
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        p.x = Math.max(0, Math.min(W, p.x))
        p.y = Math.max(0, Math.min(H, p.y))
      }

      // links
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.28
            ctx.strokeStyle = `rgba(148, 163, 255, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        // mouse link with neon glow
        const mx = a.x - mouse.x
        const my = a.y - mouse.y
        const md = Math.hypot(mx, my)
        if (md < MOUSE_DIST) {
          const alpha = 1 - md / MOUSE_DIST
          const g = ctx.createLinearGradient(a.x, a.y, mouse.x, mouse.y)
          g.addColorStop(0, `rgba(34, 211, 238, ${alpha * 0.55})`)
          g.addColorStop(1, 'rgba(167, 139, 250, 0)')
          ctx.strokeStyle = g
          ctx.lineWidth = 1.2
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }

      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.c
        ctx.globalAlpha = 0.75
        ctx.fill()
      }
      ctx.globalAlpha = 1

      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseout', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
}
