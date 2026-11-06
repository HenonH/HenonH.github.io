import { motion } from 'framer-motion'

export default function SectionHeading({ children, eyebrow }) {
  return (
    <div className="mb-14">
      {eyebrow && <p className="label mb-4">{eyebrow}</p>}
      <motion.h2
        className="font-display text-5xl text-white sm:text-7xl"
        initial={{ opacity: 0, filter: 'blur(16px)', y: 30 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.h2>
    </div>
  )
}
