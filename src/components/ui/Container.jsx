export default function Container({ children, className = '' }) {
  return <div className={`container-max section-px ${className}`}>{children}</div>
}
