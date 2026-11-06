export default function RichText({ text }) {
  return text.split(/(\[\[.*?\]\])/g).map((part, i) =>
    part.startsWith('[[') ? (
      <span key={i} className="mx-0.5 whitespace-nowrap bg-crimson/15 px-1.5 py-0.5 text-crimson-soft">
        {part.slice(2, -2)}
      </span>
    ) : (
      part
    ),
  )
}
