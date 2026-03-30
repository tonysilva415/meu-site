import { FiArrowUpRight, FiInfo, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { contactSection } from '../content/sections.js'
import { Reveal } from '../components/Reveal.jsx'

export function ContactSection() {
  const { eyebrow, title, description, address, contacts, mapEmbed, parkingInfo, action } = contactSection

  return (
    <section id="contato" className="relative overflow-hidden bg-neutral-50 py-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary-500/5 to-transparent" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1.2fr)_380px]">
        <div className="space-y-8">
          <Reveal className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary-500">{eyebrow}</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="text-base leading-relaxed text-neutral-600">{description}</p>
          </Reveal>

          <Reveal className="overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-sm">
            <div className="relative aspect-[5/4] w-full">
              <iframe
                title="Localização ACONE"
                src={mapEmbed}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="flex h-full flex-col gap-8 rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-5">
            <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary-600">
              <FiMapPin className="h-5 w-5" />
            </span>
            <div className="space-y-1">
              {address.map((line) => (
                <p key={line} className="text-base font-medium text-neutral-700">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {contacts.map((item) => {
              const iconMap = {
                phone: FiPhone,
                mail: FiMail,
              }
              const Icon = iconMap[item.icon] ?? FiInfo

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-4 text-sm transition hover:border-primary hover:bg-primary/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-primary-600">{item.value}</span>
                    </div>
                  </div>
                  <FiArrowUpRight className="h-5 w-5 flex-shrink-0 text-neutral-400 transition group-hover:text-primary" />
                </a>
              )
            })}
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-600">
            <FiInfo className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" />
            <p>{parkingInfo}</p>
          </div>

          <a
            href={action.href}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-600"
          >
            <span>{action.label}</span>
            <FiArrowUpRight className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

