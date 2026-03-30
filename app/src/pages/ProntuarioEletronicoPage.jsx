import { Link } from 'react-router-dom'
import { FiFileText, FiActivity, FiArchive } from 'react-icons/fi'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading'

export function ProntuarioEletronicoPage() {
  const features = [
    'Permite o registro da triagem ou preparo de cada paciente durante a pré-consulta;',
    'Registra os procedimentos realizados pela triagem;',
    'Informa a saída do atendimento com encaminhamentos para usuários que não necessitam de atendimento médico;',
    'Calcula automaticamente o IMC (Índice de Massa Corporal), ICQ (Índice de cintura e quadris), e estado nutricional conforme a idade do paciente;',
    'Permite configurar a obrigatoriedade do preenchimento de peso, altura e pressão arterial conforme o ciclo de vida dos pacientes;',
    'Permite a avaliação de dor, classificação de risco (Protocolo de Manchester) e Escala de Glasgow;',
    'Permite informar o material e CID consistente para cada exame;',
    'Registra a receita de medicamentos, atestado médico, declaração de comparecimento, orientações, requisição de exames e guia de referência;',
    'Registra os atendimentos de enfermagem utilizando a metodologia CIPESC;',
    'Registra informações clínicas (alergias, doenças) dos pacientes no momento do atendimento médico;',
    'Permite a visualização do histórico de agendamentos do paciente;',
    'Permite o uso de foto no cadastro de pacientes;',
    'Dá acesso completo ao médico aos atendimentos anteriores do paciente por ordem cronológica;',
    'Permite a visualização de documentos digitalizados para cada paciente atendido;',
    'Permite o registro de anamnese e exame físico durante cada atendimento;',
    'Permite a solicitação de medicamentos de acordo com os produtos padronizados pela farmácia;',
    'Contém os resultados e laudos dos exames solicitados no prontuário eletrônico do paciente;',
    'Controla a solicitação de medicamentos conforme o estoque da unidade;',
    'Importa automaticamente os resultados de exames para o prontuário eletrônico;',
    'Permite a emissão e registro de atestados, encaminhamentos e orientações;',
    'No ambulatório, mostra automaticamente ao médico a disponibilidade de estoque de um medicamento;',
    'Permite consulta do histórico de todos os atendimentos odontológicos por paciente;',
    'O acesso às informações do prontuário é restrito a médicos, peritos e médicos reguladores;',
    'Permite que profissionais de saúde preencham fichas compatíveis com as do e-SUS.',
  ]

  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[url('/marketing-bg6-2048x1076-2.png')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="text-center">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Prontuário Eletrônico</h1>
            <p className="mt-4 text-xl font-medium text-white/90">SOAP</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <Reveal className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FiFileText className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">Registro Completo</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Documentação completa do atendimento, incluindo triagem, anamnese, exame físico e evolução.
              </p>
            </Reveal>

            <Reveal className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm" delay={80}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FiActivity className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">Cálculos Automáticos</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                IMC, ICQ e estado nutricional calculados automaticamente conforme o ciclo de vida do paciente.
              </p>
            </Reveal>

            <Reveal className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm" delay={160}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FiArchive className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">Histórico Integrado</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Acesso completo ao histórico do paciente em todas as unidades que utilizam o SaúdeNet.
              </p>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900">Funcionalidades Principais</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                    <p className="text-sm leading-relaxed text-neutral-600">{feature}</p>
                  </div>
                ))}
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

