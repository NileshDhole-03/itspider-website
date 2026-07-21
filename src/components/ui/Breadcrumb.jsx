import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-sm text-ink-muted">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {item.to && !isLast ? (
              <Link to={item.to} className="hover:text-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-ink-primary font-medium' : ''}>{item.label}</span>
            )}
            {!isLast && <ChevronRight size={14} />}
          </span>
        )
      })}
    </nav>
  )
}
