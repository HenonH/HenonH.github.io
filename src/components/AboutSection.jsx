import Reveal from './Reveal'
import RichText from './RichText'
import Button from './Button'
import { about, highlights, profile } from '../data/content'

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-20">
      <Reveal>
        <p className="label mb-6">About</p>
        <div className="space-y-6 text-lg leading-relaxed sm:text-xl">
          {about.map((p) => (
            <p key={p}>
              <RichText text={p} />
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-16">
        <p className="label mb-6">Cool stuff I’ve done</p>
        <ul className="space-y-5 text-lg leading-relaxed">
          {highlights.map((h) => (
            <li key={h} className="flex gap-4">
              <span className="mt-[0.7em] h-px w-4 shrink-0 bg-neutral-600" />
              <span>
                <RichText text={h} />
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.15} className="mt-14 flex flex-wrap gap-4">
        <Button to="/projects" variant="solid">View Projects</Button>
        <Button href={profile.resume} target="_blank" rel="noreferrer">Resume</Button>
      </Reveal>
    </section>
  )
}
