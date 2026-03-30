import { Link } from 'react-router-dom'
import { dataAccessSection } from '../content/sections.js'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal.jsx'
import { CountUp } from '../components/CountUp.jsx'

export function DataAccessSection() {
  return (
    <section className="bg-gradient-to-br from-primary-500/95 via-primary-600/90 to-neutral-900 py-20 sm:py-24 text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 sm:px-10 md:grid-cols-[1fr_1fr] md:items-center">
        <Reveal className="space-y-6">
          <SectionHeading
            eyebrow="Analytics em saúde"
            title={dataAccessSection.title}
            description={dataAccessSection.description}
            tone="light"
            align="left"
          />
          <Link to={dataAccessSection.action.href} className="btn-secondary inline-flex w-fit items-center justify-center">
            {dataAccessSection.action.label}
          </Link>
        </Reveal>

        <Reveal className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur" delay={120}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Monitoramento em tempo real
          </p>
          <p className="mt-3 text-lg text-white/90">
            Painéis personalizados por perfil de usuário, consolidando dados de produção, regulação e qualidade em um só lugar.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {dataAccessSection.metrics.map((metric, index) => (
              <div key={metric.label} className="rounded-2xl bg-white/10 p-4 text-white shadow-inner">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold">
                  <CountUp
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    duration={1.8 + index * 0.2}
                  />
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
