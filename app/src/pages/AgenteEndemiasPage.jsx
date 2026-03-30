import { Link } from 'react-router-dom'
import { FiMapPin, FiTablet, FiGrid } from 'react-icons/fi'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading'

export function AgenteEndemiasPage() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[url('/marketing-bg6-2048x1076-2.png')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="text-center">
            <span className="text-sm font-medium uppercase tracking-[0.35em] text-white/80">Acone</span>
            <h1 className="mt-2 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Sistema de Agente de Combate a Endemias (ACE)
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Fim das pranchetas com várias fichas a serem preenchidas. Estamos em um mundo moderno onde todo levantamento pode ser digitado em um tablet, buscando facilitar o processo de reconhecimento da situação de cada localidade.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <p className="text-lg font-medium leading-relaxed text-neutral-900">
              Armazenamento de todas as informações de cada localidade referentes a endemias na nuvem, possibilitando aos técnicos de laboratórios consultar e registrar as situações encontradas em cada localidade, como casas, comércios, edifícios, etc.
            </p>
          </Reveal>

          <div className="mt-12 space-y-12">
            <Reveal delay={80}>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-neutral-900">Cadastro de Ruas</h2>
                <p className="text-base leading-relaxed text-neutral-600">
                  Cadastro de todas as ruas do município para possibilitar a definição dos quarteirões e lados que compõem os quarteirões.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-neutral-900">Cadastro de Quarteirões</h2>
                <p className="text-base leading-relaxed text-neutral-600">
                  Os quarteirões são definidos por um nome e uma descrição para facilitar o entendimento dos agentes de saúde. Dentro de cada quarteirão, são definidos os lados que o compõem.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <FiTablet className="h-6 w-6 text-primary-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">Aplicativo para Tablets</h2>
                    <p className="text-base leading-relaxed text-neutral-600">
                      A gestão do sistema e dos agentes é realizada através do computador, e as fichas preenchidas pelos agentes são digitadas por meio de um aplicativo instalado em tablets. Os operadores irão inserir todas as informações necessárias sobre Dengue, Esquistossomose e outros, conforme os padrões do Ministério da Saúde.
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <img
                    src="/g23.png"
                    alt="Aplicativo para tablets"
                    className="rounded-3xl border border-neutral-100 shadow-sm"
                  />
                  <img
                    src="/Ig1505.png"
                    alt="Interface do aplicativo"
                    className="rounded-3xl border border-neutral-100 shadow-sm"
                  />
                </div>
              </div>
            </Reveal>
          </div>
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

