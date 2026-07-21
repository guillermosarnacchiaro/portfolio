import { useId } from 'react'

function Input({ label, error, id: providedId, className = '', ...props }) {
  const generatedId = useId()
  const id = providedId ?? generatedId
  const errorId = `${id}-error`

  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-foreground" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`min-h-12 rounded-input border border-border bg-surface px-4 text-foreground placeholder:text-subtle transition-[border-color,box-shadow] duration-200 ease-standard hover:border-subtle focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 ${className}`}
        {...props}
      />
      {error && <p id={errorId} className="text-sm text-error">{error}</p>}
    </div>
  )
}

export default Input
