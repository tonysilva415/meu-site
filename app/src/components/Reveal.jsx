import { useInView } from '../hooks/useInView.js'

export function Reveal({ children, className = '', delay = 0, as: Component = 'div' }) {
  const [ref, isVisible] = useInView()

  const base = 'transform transition-all duration-700 ease-out'
  const state = isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base} ${state} ${className}`.trim()}
    >
      {children}
    </Component>
  )
}
