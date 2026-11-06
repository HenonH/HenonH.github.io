import { Download, Mail } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import Button from './Button'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="04 — Contact" title="Let’s build something">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10 p-8 sm:p-14">
          <div className="grid-bg absolute inset-0 opacity-50" />
          <div className="relative">
            <p className="max-w-xl text-lg text-neutral-300">
              Open to internships, co-ops, and interesting hardware problems. The best way to reach me is email.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block text-2xl font-semibold text-white underline decoration-white/20 underline-offset-8 transition-colors hover:decoration-sky-300 sm:text-4xl"
            >
              {profile.email}
            </a>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={`mailto:${profile.email}`} icon={Mail}>Email me</Button>
              <Button href={profile.resume} variant="secondary" icon={Download} download>
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
