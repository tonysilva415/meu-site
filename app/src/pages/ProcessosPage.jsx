import { Link } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading'

export function ProcessosPage() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[url('/marketing-bg6-2048x1076-2.png')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="text-center">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Processos</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="space-y-6 text-base leading-relaxed text-neutral-600">
            <p>
              Os novos requisitos de negócio não permitem engessamento de processos. Definir um fluxo, codificar e entregar ao cliente já não é mais ideal.
            </p>
            <p>
              Pensando nisso, desenvolvemos nossa tecnologia para ser adaptável a todo momento pelo gestor, sem necessidade de nova codificação.
            </p>
            <p>
              Assim, nosso cliente não precisa mais escolher um sistema baseado no fluxo, pois ele pode definir e redefinir conforme desejar.
            </p>
          </Reveal>

          <Reveal className="mt-12" delay={80}>
            <div className="rounded-3xl border border-neutral-100 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <FiSettings className="h-6 w-6 text-primary-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-neutral-900">Flexibilidade Total</h3>
                  <p className="text-base leading-relaxed text-neutral-600">
                    Nossa plataforma permite que você configure e adapte processos conforme a necessidade da sua secretaria, sem depender de desenvolvedores ou novas implementações técnicas.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[url('/marketing-bg6-2048x1076-2.png')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 text-center sm:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Pronto para mudar?"
              title="Queremos ajudar você a transformar a gestão de saúde do seu município."
              tone="light"
            />
            <div className="mt-8">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-neutral-50"
              >
                Entrar em contato
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

