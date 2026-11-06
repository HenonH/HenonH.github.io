import Section from './Section'
import Reveal from './Reveal'

const stats = [
  { value: '6+', label: 'Hardware projects' },
  { value: '3', label: 'Industry roles' },
  { value: '∞', label: 'Prototypes broken' },
]

export default function About() {
  return (
    <Section id="about" eyebrow="03 — About" title="Building real things">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-neutral-400">
            <p>
              I’m a mechatronics engineering student who learns best by building. I’m drawn to problems where the
              physics pushes back — seals that leak at depth, joints that flex under load, batteries that run hot —
              and the only way through is to design, build, test, and iterate.
            </p>
            <p>
              I care about <span className="text-white">mechanical intuition</span>: understanding why a part works
              before the simulation says so. From CAD to the machine shop to the test bench, I like owning the full
              loop and shipping hardware that actually holds up in the real world.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-3xl font-semibold text-white">{s.value}</div>
                <div className="mt-1 text-sm text-neutral-500">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
