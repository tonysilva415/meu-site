import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView.js'

const formatter = new Intl.NumberFormat('pt-BR')

export function CountUp({ value, duration = 2, decimals = 0, prefix = '', suffix = '', className = '' }) {
  const [ref, isVisible] = useInView({ threshold: 0.2 })
  const [displayValue, setDisplayValue] = useState(0)
  const startRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!isVisible) {
      return undefined
    }

    const target = Number(value) || 0
    const totalDuration = Math.max(duration, 0.5) * 1000

    setDisplayValue(0)
    startRef.current = null

    const step = (timestamp) => {
      if (!startRef.current) {
        startRef.current = timestamp
      }
      const progress = Math.min((timestamp - startRef.current) / totalDuration, 1)
      const current = target * progress
      const factor = 10 ** decimals
      setDisplayValue(Math.round(current * factor) / factor)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      startRef.current = null
    }
  }, [isVisible, value, duration, decimals])

  const valueToFormat = decimals > 0 ? Number(displayValue.toFixed(decimals)) : Math.round(displayValue)
  const formatted = formatter.format(valueToFormat)

  return (
    <span ref={ref} className={className}>
      {`${prefix ?? ''}${formatted}${suffix ?? ''}`}
    </span>
  )
}
