import { Link } from 'react-router-dom'

const variants = {
  outline: 'border border-white/80 text-white hover:border-crimson hover:bg-crimson',
  solid: 'border border-crimson bg-crimson text-white hover:bg-crimson-soft hover:border-crimson-soft',
}

export default function Button({ href, to, children, variant = 'outline', ...props }) {
  const className = `group inline-flex items-center gap-3 px-7 py-4 font-mono text-sm uppercase tracking-[0.15em] transition-colors duration-300 ${variants[variant]}`
  const content = (
    <>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {content}
      </Link>
    )
  }
  return (
    <a href={href} className={className} {...props}>
      {content}
    </a>
  )
}
