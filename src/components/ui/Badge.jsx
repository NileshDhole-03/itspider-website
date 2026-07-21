export default function Badge({ children, tone = 'light', className = '' }) {
  const tones = {
    light: 'eyebrow-badge',
    dark: 'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80 uppercase',
    accent: 'inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase',
  }
  return <span className={`${tones[tone]} ${className}`}>{children}</span>
}
