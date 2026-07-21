const baseField =
  'w-full rounded-btn border border-line bg-white px-4 py-3 text-[15px] text-ink-primary placeholder:text-ink-muted transition-colors duration-150 focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none disabled:opacity-60'

export function Field({ label, required, error, children, htmlFor }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink-primary">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
      {error && <span className="text-xs font-medium text-red-600">{error}</span>}
    </div>
  )
}

export function Input({ id, error, className = '', ...props }) {
  return (
    <input
      id={id}
      className={`${baseField} ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''} ${className}`}
      {...props}
    />
  )
}

export function Textarea({ id, error, className = '', rows = 4, ...props }) {
  return (
    <textarea
      id={id}
      rows={rows}
      className={`${baseField} resize-none ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''} ${className}`}
      {...props}
    />
  )
}

export function Select({ id, error, className = '', children, ...props }) {
  return (
    <select
      id={id}
      className={`${baseField} ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''} ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}
