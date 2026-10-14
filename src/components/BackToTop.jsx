import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '../icons'

export default function BackToTop({ hidden }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const show = visible && !hidden

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Przewiń do góry"
      className={`fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-wood text-white shadow-[0_10px_24px_-6px_rgba(36,29,25,0.45)] transition-all duration-300 hover:bg-wood-dark sm:right-8 sm:bottom-8 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUpIcon />
    </button>
  )
}
