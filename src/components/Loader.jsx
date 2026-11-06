import { useEffect, useState } from 'react'
import { animate, motion } from 'framer-motion'

const DURATION = 1.6

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: DURATION,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => setTimeout(onDone, 250),
    })
    return () => controls.stop()
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative h-28 w-28 sm:h-36 sm:w-36">
        <img src="./logo-white.png" alt="" className="absolute inset-0 h-full w-full opacity-10" />
        <img
          src="./logo-crimson.png"
          alt="Henon Hailu"
          className="absolute inset-0 h-full w-full"
          style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
        />
      </div>

      <div className="mt-10 h-px w-40 overflow-hidden bg-white/10">
        <div className="h-full bg-crimson" style={{ width: `${progress}%` }} />
      </div>
      <span className="mt-4 font-mono text-xs tabular-nums tracking-[0.2em] text-neutral-500">
        {String(progress).padStart(3, '0')}
      </span>
    </motion.div>
  )
}
