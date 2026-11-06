import { motion } from 'framer-motion'
import SplitText from './SplitText'
import ProfilePhoto from './ProfilePhoto'
import { profile } from '../data/content'

const fade = (delay) => ({
  initial: { opacity: 0, y: 16, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-6 pb-16 pt-32 md:grid-cols-[1.3fr_1fr]">
      <div>
        <h1
          aria-label={`${profile.firstName} ${profile.lastName}, mechatronics and robotics engineer`}
          className="font-display text-white"
          style={{ fontSize: 'clamp(4rem, 12vw, 9.5rem)' }}
        >
          <SplitText text={profile.firstName} />
          <br />
          <span className="flex flex-wrap items-end gap-x-5">
            <SplitText text={profile.lastName} delay={0.25} className="text-crimson" />
            <motion.span
              {...fade(0.7)}
              className="mb-3 font-mono text-xs font-normal normal-case leading-relaxed tracking-[0.2em] text-neutral-500 sm:text-sm"
            >
              MECHATRONICS &<br />ROBOTICS ENGINEER
            </motion.span>
          </span>
        </h1>

        <motion.p {...fade(0.85)} className="mt-10 max-w-md text-xl text-neutral-300">
          {profile.tagline}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
        animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <ProfilePhoto className="aspect-[4/5] w-full" />
      </motion.div>
    </section>
  )
}
