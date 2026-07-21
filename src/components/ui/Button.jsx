import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary: 'btn-primary group',
  secondary: 'btn-secondary group',
  darkOutline: 'btn-dark-outline group',
}

export default function Button({ to, href, onClick, variant = 'primary', children, icon = true, type = 'button', className = '' }) {
  const classes = `${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {icon && <ArrowRight size={17} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
