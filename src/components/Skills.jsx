import { Cog, Cpu, Hammer } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { skills } from '../data/content'

const icons = { Mechanical: Cog, Electrical: Cpu, Fabrication: Hammer }

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Toolkit" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = icons[group.category]
          return (
            <Reveal key={group.category} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/20">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-sky-300 transition-transform duration-300 group-hover:rotate-12">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/10 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:border-sky-300/40 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
