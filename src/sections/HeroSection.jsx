import { Link } from 'react-router-dom'
import { heroContent } from '../content/sections.js'
import { Reveal } from '../components/Reveal.jsx'

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block md:bg-right">
        <img
          src="/capa-desktop.png"
          alt=""
          className="h-full w-full object-cover object-right"
          aria-hidden="true"
        />
      </div>

      <div className="md:hidden">
        <img
          src="/capa_acone_mobile.png"
          alt=""
          className="w-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 sm:py-28">
        <div className="max-w-2xl">
          <Reveal className="flex flex-col gap-4 text-neutral-900" as="div">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary-500">
              Tecnologia para gestão pública da saúde
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{heroContent.title}</h1>
            <p className="text-lg font-medium text-primary-600">{heroContent.subtitle}</p>
            <p className="text-base leading-relaxed text-neutral-600 md:max-w-[26rem] max-w-full ">{heroContent.description}</p>
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <Link
                to={heroContent.primaryAction.href}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-600"
              >
                {heroContent.primaryAction.label}
              </Link>
              <Link
                to={heroContent.secondaryAction.href}
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5"
              >
                {heroContent.secondaryAction.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
