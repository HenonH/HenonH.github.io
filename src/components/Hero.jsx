import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, FileText } from 'lucide-react'
import Button from './Button'
import { profile } from '../data/content'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0" />
        <div className="blob absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div
          className="blob absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-white/[0.06] blur-[120px]"
          style={{ animationDelay: '-7s' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-16">
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-neutral-300 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.role}
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-display mt-8 text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="mt-6 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          {profile.tagline}
        </motion.p>

        <motion.p {...fadeUp(0.25)} className="mt-3 font-mono text-sm uppercase tracking-wider text-accent">
          {profile.focus}
        </motion.p>

        <motion.div {...fadeUp(0.35)} className="mt-10 flex flex-wrap gap-4">
          <Button href="#projects" icon={ArrowRight}>View Projects</Button>
          <Button href={profile.resume} variant="secondary" icon={FileText} target="_blank" rel="noreferrer">
            Resume
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-white"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  )
}
