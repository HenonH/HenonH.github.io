import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Button from './Button'
import { profile } from '../data/content'

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading>Let’s Connect</SectionHeading>
      <Reveal>
        <p className="max-w-lg text-lg leading-relaxed">
          Open to internships, co-ops, and interesting hardware problems. Have a question or just want to say hello?
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block text-2xl font-semibold text-white underline decoration-crimson/40 decoration-2 underline-offset-8 transition-colors hover:text-crimson-soft hover:decoration-crimson sm:text-3xl"
        >
          {profile.email}
        </a>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button href={`mailto:${profile.email}`} variant="solid">Email</Button>
          <Button href={profile.resume} download>Resume</Button>
        </div>
      </Reveal>
    </section>
  )
}
