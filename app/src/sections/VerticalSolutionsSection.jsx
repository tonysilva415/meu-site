import { Link } from 'react-router-dom'
import { verticalSolutions } from '../content/sections.js'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal.jsx'

export function VerticalSolutionsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Soluções específicas"
            title="Resultados para cada frente de trabalho"
            description="Especializamos fluxos críticos da vigilância sanitária e dos agentes de endemias com aplicações móveis e painéis estratégicos que mantêm o gestor sempre informado."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {verticalSolutions.map((solution, index) => (
            <Reveal
              key={solution.title}
              className="flex h-full flex-col rounded-3xl border border-neutral-100 bg-neutral-50 p-8 shadow-sm"
              delay={index * 100}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 text-xl font-semibold text-white shadow">
                {solution.title.charAt(0)}
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-semibold text-neutral-900">{solution.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{solution.description}</p>
              </div>
              <Link
                to={solution.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary-600 hover:text-secondary-500"
              >
                Explorar <span aria-hidden>→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
