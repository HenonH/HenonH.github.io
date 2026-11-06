import { motion } from 'framer-motion'

export default function SplitText({ text, delay = 0, stagger = 0.04, className = '' }) {
  return (
    <span className={`inline-flex overflow-hidden ${className}`} aria-label={text}>
      {[...text].map((char, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}
