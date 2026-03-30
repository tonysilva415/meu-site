import { heroContent } from '../content/sections.js'
import { Reveal } from '../components/Reveal.jsx'
import { CountUp } from '../components/CountUp.jsx'

export function HeroResultsSection() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:px-10">
        <div className="grid gap-6 rounded-3xl border border-neutral-100 bg-white/80 p-8 shadow-sm sm:grid-cols-3">
          {heroContent.highlights.map((item, index) => (
            <Reveal key={item.description} className="flex flex-col gap-1 text-center" delay={index * 80}>
              <span className="text-2xl font-semibold text-primary-600">
                {'value' in item ? (
                  <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} duration={1.8 + index * 0.3} />
                ) : (
                  item.label
                )}
              </span>
              <span className="text-sm text-neutral-600">{item.description}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  Resultados
                </span>
                <p className="text-base leading-relaxed text-neutral-600">
                  Gestão integral, dados confiáveis e suporte especializado para secretarias municipais.
                </p>
              </div>
              <dl className="flex flex-col gap-4 text-sm text-neutral-600">
                {heroContent.highlights.map((item, index) => (
                  <div key={item.description} className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4">
                    <dt>{item.description}</dt>
                    <dd className="text-xl font-semibold text-primary-600">
                      {'value' in item ? (
                        <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} duration={1.8 + index * 0.3} />
                      ) : (
                        item.label
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

