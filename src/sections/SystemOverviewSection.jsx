import { Link } from 'react-router-dom'
import { systemOverview } from '../content/sections.js'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal.jsx'

export function SystemOverviewSection() {
  const highlights = [
    'Regulação, agendas e auditoria em um único ambiente.',
    'Prontuário eletrônico interoperável com o e-SUS.',
    'Dashboards executivos e alertas inteligentes.',
  ]

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Sistema ACONE"
            title={systemOverview.title}
            description={systemOverview.description}
            align="left"
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <Reveal className="flex flex-col gap-4">
            <ul className="space-y-3 text-sm text-neutral-600">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-secondary-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to={systemOverview.action.href}
              className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-600"
            >
              {systemOverview.action.label}
            </Link>
          </Reveal>

          <Reveal className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8 shadow-sm" delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">Sala de situação</p>
            <div className="mt-6 space-y-4 text-sm text-neutral-600">
              <div className="rounded-2xl bg-white p-4 shadow-inner">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Fluxo diário</p>
                <p className="text-2xl font-semibold text-primary-600">2.134 solicitações</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-inner">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Tempo médio de resposta</p>
                <p className="text-2xl font-semibold text-primary-600">34 minutos</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
