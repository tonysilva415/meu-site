import { Link } from 'react-router-dom'
import { finalCta } from '../content/sections.js'
import { Reveal } from '../components/Reveal.jsx'

export function FinalCtaSection() {
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-neutral-900 py-20 text-primary-foreground"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-10">
        <Reveal className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary-200/80">
            {finalCta.eyebrow}
          </p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">{finalCta.title}</h2>
          <Link to={finalCta.action.href} className="btn-secondary inline-flex w-fit items-center justify-center">
            {finalCta.action.label}
          </Link>
        </Reveal>
      </div>
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-secondary-400/40 blur-3xl" aria-hidden />
    </section>
  )
}
