import { Link } from 'react-router-dom'
import { FiHeart, FiSmartphone, FiUsers, FiFileText } from 'react-icons/fi'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading'

export function AtencaoBasicaPage() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[url('/marketing-bg6-2048x1076-2.png')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="text-center">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Atenção Básica</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="space-y-6 text-base leading-relaxed text-neutral-600">
            <p>
              A atenção básica é a porta de entrada do SUS para os brasileiros. Além do notável ganho para a população, com o aumento da qualidade de vida, estima-se que, para cada real investido em prevenção, há uma economia de 3 a 5 reais nos gastos com média e alta complexidade.
            </p>
            <p>
              O módulo de atenção básica Saúde Net atende a todas as necessidades de controle e acompanhamento das unidades básicas de saúde. A secretaria pode optar para que apenas a partir do atendimento pelo médico da atenção básica seja possível encaminhar o paciente para exames e consultas especializadas, evitando assim o uso indevido dos recursos públicos.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Reveal className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FiSmartphone className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">APLICATIVO MÓVEL</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Como evitar os custos e o retrabalho de preencher fichas em papel, que depois precisam ser digitalizadas no posto? Oferecemos um aplicativo móvel para que os ACS possam registrar todas as informações de suas visitas, totalmente compatível com as fichas do E-SUS. A integração com a unidade de referência permite que consultas e procedimentos de enfermagem sejam agendados online pelo ACS diretamente da residência visitada.
              </p>
            </Reveal>

            <Reveal className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm" delay={80}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FiUsers className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">RECEPÇÃO NA UBS</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Na recepção das unidades, temos o atendimento à demanda espontânea. Com o controle digital das agendas de cada médico e enfermeiro, a secretaria pode monitorar a produtividade de cada profissional e identificar quais áreas precisam de reforços. Disponibilizamos ainda o controle das pessoas a serem atendidas através de um painel digital, o cadastro biométrico dos pacientes e a conexão com o serviço CADweb do Ministério da Saúde para garantir a unicidade dos usuários e seus múltiplos números de Cartões Nacionais de Saúde.
              </p>
            </Reveal>

            <Reveal className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm" delay={160}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FiFileText className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">ATENDIMENTO MÉDICO</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Para auxiliar o trabalho de médicos e enfermeiros, contamos ainda com um Prontuário Eletrônico do Paciente. É possível registrar anamneses, fichas e-SUS, odontogramas, emitir receitas, além de consultar todo o histórico do paciente registrado em qualquer unidade de saúde que também utilize o SaúdeNet.
              </p>
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

