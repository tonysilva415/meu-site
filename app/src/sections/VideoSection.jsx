import { videoSection } from '../content/sections.js'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal.jsx'

export function VideoSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Reconhecimento"
            title={videoSection.title}
            description={videoSection.description}
          />
        </Reveal>

        <Reveal className="mt-12 rounded-3xl border border-neutral-900/10 bg-neutral-900 text-white shadow-lg" delay={120}>
          <div className="grid gap-10 p-10 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary-300">
                Reconhecimento nacional
              </p>
              <p className="text-base text-neutral-200">
                Nossa solução foi notícia no principal telejornal do país, comprovando o impacto da tecnologia ACONE na gestão pública de saúde.
              </p>
              <div className="flex items-center gap-2 text-secondary-200">
                <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-100">
                  ▶
                </span>
                <span className="text-sm">Assista à cobertura completa no Jornal Nacional.</span>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/20 shadow">
              <iframe
                src={videoSection.videoUrl}
                title="ACONE no Jornal Nacional"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
