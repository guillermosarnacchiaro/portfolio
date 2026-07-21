const variants = {
  primary:
    'relative overflow-hidden bg-primary px-6 text-white shadow-button before:pointer-events-none before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/8 before:to-transparent hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-primary-hover hover:shadow-card-hover',
  secondary:
    'border border-border bg-transparent text-foreground hover:border-subtle hover:bg-surface-hover',
  ghost: 'bg-transparent text-muted hover:bg-surface-hover hover:text-foreground',
}

function Button({ as: Component = 'button', variant = 'primary', className = '', ...props }) {
  return (
    <Component
      className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-button px-5 py-3 text-sm font-semibold transition-all duration-200 ease-standard disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    />
  )
}

export default Button
