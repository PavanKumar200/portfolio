import { useEffect, useState } from 'react'

export default function TypingText({ words, className = '' }) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    let delay = deleting ? 45 : 95

    if (!deleting && text === word) {
      delay = 1600
    } else if (deleting && text === '') {
      delay = 500
    }

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1),
        )
      }
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, wordIndex, words])

  return (
    <span className={className}>
      {text}
      <span className="animate-pulseGlow ml-[2px] inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-cyan-400" />
    </span>
  )
}
