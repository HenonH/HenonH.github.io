import Reveal from './Reveal'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300/80">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
