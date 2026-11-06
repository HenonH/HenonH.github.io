import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Tag from './Tag'
import { experience } from '../data/content'

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-16">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <article className="group">
              <div className="flex items-start gap-5">
                <div className="font-display flex h-14 w-14 shrink-0 items-center justify-center border border-white/10 bg-panel text-2xl text-crimson transition-colors duration-300 group-hover:border-crimson/50">
                  {job.company[0]}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                  <span className="mt-1 inline-block bg-crimson/15 px-2 py-0.5 font-medium text-crimson-soft">
                    {job.company}
                  </span>
                </div>
              </div>
              {job.period && <p className="label mt-5">{job.period}</p>}
              <div className="mt-5 space-y-4 text-lg leading-relaxed">
                {job.description.map((d) => (
                  <p key={d}>{d}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {job.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
                {job.project && (
                  <Link
                    to={`/projects/${job.project}`}
                    className="ml-auto font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-crimson"
                  >
                    View project →
                  </Link>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
