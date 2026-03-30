import { Link } from 'react-router-dom'
import { FiFileText, FiCheckCircle } from 'react-icons/fi'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading'

export function RegulacaoAPACPage() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[url('/marketing-bg6-2048x1076-2.png')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="text-center">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Regulação de APAC</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="space-y-6 text-base leading-relaxed text-neutral-600">
            <p>
              A implantação de novos modelos de Laudo para Solicitação/Autorização de Procedimentos Ambulatoriais incluiu a mudança das Autorizações de Procedimentos de Alta Complexidade/Custo para Autorizações de Procedimentos Ambulatoriais (APAC), preservando a sigla APAC (PT/SAS/MS nº 768, de 26 de outubro de 2006).
            </p>
            <p>
              O perfil 'Solicitante APAC' é destinado ao estabelecimento que solicita o laudo de APAC. Ele permite o acompanhamento da solicitação através de seus diferentes estágios, a pesquisa das solicitações em andamento, a emissão do laudo de APAC e a inserção do laudo no sistema.
            </p>
          </Reveal>

          <Reveal className="mt-12" delay={80}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FiFileText className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">Gestão de Laudos</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Controle completo do processo de solicitação e autorização de procedimentos ambulatoriais, desde a abertura até a emissão do laudo.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FiCheckCircle className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">Acompanhamento em Tempo Real</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Acompanhe todas as solicitações em diferentes estágios, com rastreabilidade completa e histórico de alterações.
                </p>
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

