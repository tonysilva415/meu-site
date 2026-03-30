import { governanceSection } from '../content/sections.js'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal.jsx'

export function GovernanceSection() {
  return (
    <section id="gestao" className="bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Governança"
            title={governanceSection.title}
            description="Projetos pioneiros que estruturaram a regulação do SUS e colocaram a tecnologia da ACONE como referência nacional."
            align="left"
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <Reveal className="relative flex flex-col gap-6 rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-neutral-100" />
            {governanceSection.projects.map((project, index) => (
              <div key={project.year} className="relative flex flex-col gap-2 pl-10">
                <span className="absolute left-[-13px] top-2 h-3 w-3 rounded-full border-4 border-white bg-secondary-500 shadow" />
                <span className="inline-flex w-fit rounded-full bg-secondary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-600">
                  {project.year}
                </span>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {project.description}{' '}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-secondary-500 hover:text-secondary-400"
                    >
                      assistir ↗
                    </a>
                  )}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="flex flex-col gap-4 rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm" delay={120}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary-500">Objetivos estratégicos</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              {governanceSection.objectives.map((objective) => (
                <li key={objective} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
