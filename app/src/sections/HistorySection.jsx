import { Link } from 'react-router-dom'
import { historySection } from '../content/sections.js'
import { GLOBAL } from '../lib/global.js'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal.jsx'
import { CountUp } from '../components/CountUp.jsx'

export function HistorySection() {
  return (
    <section id="historico" className="bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            title={historySection.title}
            description="Tecnologia aplicada para conectar cidadãos, profissionais e gestores com dados confiáveis e decisões embasadas."
            align="left"
          />
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-stretch">
          <Reveal className="space-y-5 rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm">
            {historySection.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-neutral-600">
                {paragraph}
              </p>
            ))}
            <Link to={GLOBAL.cta.secondary.href} className="btn-primary inline-flex w-fit items-center justify-center">
              {GLOBAL.cta.secondary.label}
            </Link>
          </Reveal>
          <Reveal className="space-y-6 rounded-3xl border border-neutral-100 bg-neutral-50 p-8 shadow-sm" delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Indicadores-chave
            </p>
            <div className="space-y-4">
              {historySection.facts.map((fact, index) => (
                <div key={fact.label} className="rounded-xl bg-white p-4 shadow-inner">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">{fact.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-primary-600">
                    <CountUp
                      value={fact.value}
                      prefix={fact.prefix}
                      suffix={fact.suffix}
                      duration={1.8 + index * 0.3}
                    />
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}


