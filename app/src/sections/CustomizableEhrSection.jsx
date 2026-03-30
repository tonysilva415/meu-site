import { Link } from 'react-router-dom'
import { customizableEhrSection } from '../content/sections.js'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal.jsx'

export function CustomizableEhrSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 sm:px-10 md:grid-cols-[1.1fr_1fr] md:items-center">
        <Reveal className="space-y-5">
          <SectionHeading
            eyebrow="Prontuário customizável"
            title={customizableEhrSection.title}
            align="left"
          />
          <ul className="space-y-3">
            {customizableEhrSection.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary-500/15 text-secondary-600">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to={customizableEhrSection.action.href}
            className="btn-primary inline-flex w-fit items-center justify-center"
          >
            {customizableEhrSection.action.label}
          </Link>
        </Reveal>

        <Reveal className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8 shadow-sm" delay={120}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Layouts dinâmicos
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((column) => (
              <div key={column} className="space-y-3 rounded-2xl bg-white p-4 shadow-sm">
                <div className="h-3 w-20 rounded-full bg-secondary-500/40" />
                <div className="space-y-2">
                  {[1, 2, 3].map((row) => (
                    <div
                      key={`${column}-${row}`}
                      className={`h-8 rounded-lg ${row === 1 ? 'bg-primary-500/20' : 'bg-neutral-100'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
