import { soapSection } from '../content/sections.js'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal.jsx'

export function SoapSection() {
  return (
    <section id="prontuario" className="bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 sm:px-10 md:grid-cols-2 md:items-center">
        <Reveal className="space-y-5">
          <SectionHeading
            eyebrow="Evolução clínica"
            title={soapSection.title}
            description={soapSection.description}
            align="left"
          />
          <ul className="space-y-3">
            {soapSection.steps.map((step) => (
              <li key={step.label} className="flex items-start gap-3 text-sm text-neutral-600">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary-500/15 text-secondary-600">
                  •
                </span>
                <span>
                  <strong className="font-semibold text-neutral-800">{step.label}:</strong> {step.description}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm" delay={120}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary-500">Modelo SOAP</p>
          <div className="mt-6 space-y-4">
            {soapSection.steps.map((step, index) => (
              <div
                key={step.label}
                className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-4"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-neutral-900">{step.label}</p>
                  <p className="text-xs text-neutral-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
