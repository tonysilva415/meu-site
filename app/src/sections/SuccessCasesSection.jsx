import { successCases } from '../content/sections.js'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal.jsx'
import { CountUp } from '../components/CountUp.jsx'

export function SuccessCasesSection() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Resultados comprovados"
            title={successCases.title}
            description={successCases.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {successCases.metrics.map((metric, index) => (
            <Reveal key={metric.label} className="rounded-3xl border border-neutral-100 bg-white p-8 text-center shadow-sm" delay={index * 120}>
              <p className="text-4xl font-semibold text-primary-600">
                <CountUp value={metric.value} duration={2 + index * 0.3} suffix={metric.suffix} prefix={metric.prefix} />
              </p>
              <p className="mt-2 text-sm text-neutral-600">{metric.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
