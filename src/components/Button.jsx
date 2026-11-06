const variants = {
  primary: 'bg-accent text-white hover:bg-accent-soft shadow-[0_0_30px_-8px_rgba(229,72,60,0.7)]',
  secondary: 'border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10',
}

export default function Button({ href, children, variant = 'primary', icon: Icon, ...props }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </a>
  )
}
