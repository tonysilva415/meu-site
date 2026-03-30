import { Link } from 'react-router-dom'
import { aboutPage } from '../content/sections.js'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading'

export function AboutPage() {
  const { hero, mission, timeline, videos, videosSection, systemModules } = aboutPage

  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden bg-neutral-50 py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-24 -right-10 h-64 w-64 rounded-full bg-secondary-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Reveal className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary-500">{hero.eyebrow}</span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{hero.title}</h1>
            <p className="text-base leading-relaxed text-neutral-600">{hero.description}</p>
            <Link
              to={hero.action.href}
              className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-600"
            >
              {hero.action.label}
            </Link>
          </Reveal>

          <Reveal className="grid gap-4">
            {hero.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm"
              >
                <p className="text-2xl font-semibold text-primary-600">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-neutral-600">{item.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <Reveal className="space-y-5">
            <SectionHeading
              eyebrow="Propósito"
              title="Tecnologia com impacto social"
              description="Conectamos dados, pessoas e processos para entregar gestão pública mais eficiente, transparente e humana."
              align="left"
            />
            <div className="space-y-4 text-base leading-relaxed text-neutral-600">
              {mission.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="grid gap-4">
            {mission.values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary-500">
                  {value.title}
                </p>
                <p className="mt-2 text-sm text-neutral-600">{value.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Solução completa"
              title={systemModules.title}
              description={systemModules.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {systemModules.modules.map((category, categoryIndex) => (
              <Reveal
                key={category.category}
                className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm"
                delay={categoryIndex * 100}
              >
                <h3 className="mb-6 text-lg font-semibold text-primary-600">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Linha do tempo"
              title="Marcos que moldaram nossa trajetória"
              description="Uma jornada de inovação contínua na regulação pública, construindo referências para o SUS."
            />
          </Reveal>

          <div className="mt-12 space-y-6">
            {timeline.map((milestone, index) => (
              <Reveal
                key={milestone.year}
                className="flex flex-col gap-3 rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm md:flex-row md:items-start md:gap-6"
                delay={index * 80}
              >
                <span className="inline-flex h-14 min-w-[5rem] flex-shrink-0 items-center justify-center rounded-lg border-2 border-primary-500 bg-gradient-to-br from-primary-500 to-secondary-500 px-3 text-sm font-semibold text-white shadow">
                  {milestone.year}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900">{milestone.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{milestone.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Na mídia"
              title={videosSection.title}
              description={videosSection.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {videos.map((video) => (
              <Reveal key={video.title} className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm">
                <div className="aspect-video overflow-hidden rounded-2xl border border-neutral-100 bg-black shadow">
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900">{video.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{video.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

