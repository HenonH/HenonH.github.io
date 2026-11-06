import Section from './Section'
import Reveal from './Reveal'

const stats = [
  { value: '8', label: 'Hardware builds' },
  { value: '3', label: 'Industry teams' },
  { value: 'UW', label: 'Mechatronics Engineering' },
]

export default function About() {
  return (
    <Section id="about" eyebrow="03 — About" title="Building real things">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-neutral-400">
            <p>
              I’m a mechatronics engineering student at the University of Waterloo, and I learn best by building. I’m
              drawn to problems where the physics pushes back: seals that leak at depth, linkages that take a beating
              on every landing, rotors that flex under stall torque. The only way through is to design, build, test,
              and iterate.
            </p>
            <p>
              I care about <span className="text-white">mechanical intuition</span>, meaning I want to understand why a
              part works before the simulation confirms it. When I started my underwater actuator I had no formal
              background in motor design, fluid systems, or sealing. I learned from papers and first principles, then
              validated each idea on real prototypes.
            </p>
            <p>
              From CAD to the machine shop to the test bench, I like owning the full loop and shipping hardware that
              holds up in the real world.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-panel p-5">
                <div className="font-display text-3xl text-white">{s.value}</div>
                <div className="mt-1 text-sm text-neutral-500">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
