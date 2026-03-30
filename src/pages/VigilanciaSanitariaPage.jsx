import { Link } from 'react-router-dom'
import { FiFileText, FiSearch, FiCheckSquare, FiMail } from 'react-icons/fi'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading'

export function VigilanciaSanitariaPage() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[url('/marketing-bg6-2048x1076-2.png')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="text-center">
            <span className="text-sm font-medium uppercase tracking-[0.35em] text-white/80">Acone</span>
            <h1 className="mt-2 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Sistema de Vigilância Sanitária
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Fim do armazenamento de papéis de processos, licenças e alvarás. Buscamos facilitar a busca e o andamento dos processos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="space-y-6 text-base leading-relaxed text-neutral-600">
            <p className="text-lg font-medium text-neutral-900">
              O sistema de Vigilância Sanitária tem como finalidade armazenar todas as informações das licenças e o andamento dos processos na nuvem, facilitando a consulta por CNPJ ou CPF de todas as informações necessárias dos estabelecimentos.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-12">
            <ul className="space-y-4 text-base leading-relaxed text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                <span>Realização de processos de Licença Sanitária e Alvará de Funcionamento;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                <span>Armazenamento de documentos na nuvem;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                <span>Integração do cadastro de estabelecimentos com a Receita Federal do Município;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                <span>Flexibilidade nos tipos de licenças;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                <span>Fim dos armários de armazenamento de documentos.</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={160} className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-neutral-900">Cadastro de Estabelecimentos</h2>
            <p className="text-base leading-relaxed text-neutral-600">
              O cadastro de estabelecimentos é integrado com a Receita Federal do Município. Basta o usuário digitar o CNPJ, e o sistema buscará todos os informes do estabelecimento junto à Receita. Ao salvar, todas as informações estarão armazenadas no sistema.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-12">
            <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8 shadow-sm">
              <h2 className="mb-6 text-center text-2xl font-semibold text-neutral-900">
                Veja o que a ACONE pode oferecer a você: um sistema que permite acompanhar todo o processo, desde a abertura até a assinatura eletrônica na emissão do alvará.
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FiFileText className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-600">SITUAÇÃO</h3>
                  <div className="space-y-3 text-sm leading-relaxed text-neutral-600">
                    <p>
                      <strong>Histórico:</strong> Todos os movimentos lançados no sistema são armazenados com o login do usuário, a data e o horário da alteração, com o objetivo de evitar qualquer possibilidade de irregularidade na alteração.
                    </p>
                    <p>
                      <strong>Documentos na Nuvem:</strong> Armazenamento dos documentos na nuvem, permitindo consulta e impressão a qualquer momento.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FiSearch className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-600">VISITAS</h3>
                  <div className="space-y-3 text-sm leading-relaxed text-neutral-600">
                    <p>Todas as informações sobre as visitas realizadas pelos fiscais nos estabelecimentos são armazenadas nos procedimentos.</p>
                    <p>
                      <strong>Agenda:</strong> Permite agendar a visita ou informar a data da visita.
                    </p>
                    <p>
                      <strong>Observação:</strong> Registra todas as anotações encontradas no estabelecimento.
                    </p>
                    <p>
                      <strong>Status:</strong> Indica a situação atual do acompanhamento do estabelecimento (pendente, vistoria, finalizado, etc.).
                    </p>
                    <p>
                      <strong>Profissional:</strong> Define os fiscais responsáveis pela visita.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FiCheckSquare className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-600">ASSINATURA</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    Permite a assinatura eletrônica dos fiscais responsáveis pela visita.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={320} className="mt-12">
            <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
              <div>
                <img
                  src="/Captura-de-tela-2022-01-03-160909.jpg"
                  alt="Alvará de Licença Sanitária"
                  className="rounded-3xl border border-neutral-100 shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-neutral-900">Alvará de Licença Sanitária</h2>
                <div className="space-y-4 text-base leading-relaxed text-neutral-600">
                  <p>
                    Emissão da licença enviada para o email do estabelecimento, contendo as assinaturas eletrônicas dos fiscais sanitários.
                  </p>
                  <p>
                    Isso elimina a necessidade de os responsáveis se dirigirem à Vigilância Sanitária para receber a licença, proporcionando economia de tempo e praticidade.
                  </p>
                  <p>Todos os dados estão conforme os padrões municipais, com suas devidas observações.</p>
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

