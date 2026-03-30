import { Link } from 'react-router-dom'
import { serviceModules } from '../content/sections.js'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal.jsx'

export function ServicesSection() {
  const badgeColors = ['from-primary-500 to-secondary-500', 'from-secondary-500 to-primary-600']

  return (
    <section id="solucoes" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Módulos ACONE"
            title="O que fazemos"
            description="Todos os fluxos da secretaria municipal em um único ecossistema, do atendimento básico à alta complexidade, com governança, rastreabilidade e indicadores em tempo real."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceModules.map((service, index) => (
            <Reveal
              key={service.title}
              className="rounded-3xl border border-neutral-100 bg-white/90 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              delay={index * 80}
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${badgeColors[index % badgeColors.length]} text-base font-semibold text-white shadow`}
              >
                {service.title.slice(0, 2)}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{service.description}</p>
              <Link
                to={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary-600 hover:text-secondary-500"
              >
                Saiba mais <span aria-hidden>→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


