import { Link } from 'react-router-dom'
import { FiShield, FiClock, FiUsers, FiCheckCircle, FiMail, FiFilter } from 'react-icons/fi'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading'

export function MediaComplexidadePage() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[url('/marketing-bg6-2048x1076-2.png')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="text-center">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Média Complexidade</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="space-y-6 text-base leading-relaxed text-neutral-600">
            <p>
              O controle da média complexidade, exames e imagem é um desafio para as secretarias de Saúde. Como oferecer o melhor serviço possível diante da demanda crescente e da pressão econômica cada vez maior?
            </p>
            <p>
              O módulo de Regulação de Média Complexidade e Exames SaúdeNet permite que a secretaria controle a oferta de suas unidades próprias e terceirizadas de maneira centralizada, proporcionando controle e segurança para sua oferta.
            </p>
          </Reveal>

          <div className="mt-12 space-y-12">
            <Reveal className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FiShield className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">CONTROLE</h3>
              </div>
              <div className="space-y-4 pl-16 text-base leading-relaxed text-neutral-600">
                <p>
                  A secretaria pode controlar a oferta de cada unidade de acordo com os valores existentes na sua Ficha de Programação Orçamentária (FPO), garantindo assim a tranquilidade no processo de faturamento. Para os municípios que são referências regionais, é possível também controlar a utilização de sua oferta por outros municípios através da sua Programação Pactuada e Integrada (PPI).
                </p>
                <p>
                  As agendas de cada médico podem ser visualizadas e controladas pela gestão, incluindo a quantidade de atendimentos, dia e horário de início do atendimento, mesmo para médicos de clínicas terceirizadas.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4" delay={80}>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FiUsers className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">ATENDIMENTO À POPULAÇÃO</h3>
              </div>
              <div className="space-y-4 pl-16 text-base leading-relaxed text-neutral-600">
                <p>
                  Ao utilizar nosso serviço centralizado de oferta de procedimentos, a secretaria disponibiliza acesso igualitário aos usuários do SUS. As demandas de todas as unidades básicas são processadas em tempo real, apresentando instantaneamente a disponibilidade de vagas com data e hora para atendimento.
                </p>
                <p>
                  Além das consultas em especialidades, é possível oferecer exames laboratoriais, raio-X, ultrassom e ressonância. Tudo é organizado por grupos de maneira facilitada para os operadores do sistema.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4" delay={160}>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FiClock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">FILA DE ESPERA INTELIGENTE E SMS</h3>
              </div>
              <p className="pl-16 text-base leading-relaxed text-neutral-600">
                Quando um usuário precisar de um procedimento que não está disponível na hora, ele pode ser colocado na fila de espera do seu município. Diariamente, os servidores da ACONE procuram alocar as vagas que surgem de maneira justa, seguindo os protocolos de priorização definidos pela secretaria. Quando uma vaga é encontrada, o usuário pode ser avisado via SMS para confirmar o interesse na marcação.
              </p>
            </Reveal>

            <Reveal className="space-y-4" delay={240}>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FiCheckCircle className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">REGULAÇÃO DE ESPECIALIDADES</h3>
              </div>
              <p className="pl-16 text-base leading-relaxed text-neutral-600">
                Precisa controlar a oferta de uma consulta ou procedimento ambulatorial crítico? O SaúdeNet permite que o gestor habilite um processo de regulação mesmo para procedimentos marcados como ambulatoriais, de acordo com a tabela SIGTAP. Solicite informações complementares no momento da solicitação e aprove, negue ou priorize as solicitações.
              </p>
            </Reveal>

            <Reveal className="space-y-4" delay={320}>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FiFilter className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">PROGRAMAS DE SAÚDE</h3>
              </div>
              <p className="pl-16 text-base leading-relaxed text-neutral-600">
                Priorize o atendimento de grupos específicos da população a partir de dados objetivos como idade, sexo, agravos e histórico prévio. A secretaria define como e quanto da sua oferta será destinada para atender casos prioritários.
              </p>
              <p className="pl-16 text-base leading-relaxed text-neutral-600">
                O SaúdeNet oferece ainda controle de recorrência de usuários, marcação facilitada de procedimentos, anexo de arquivos e questionários de dados 100% customizáveis. Entre em contato conosco para saber mais sobre nossas funcionalidades de controle avançado da oferta.
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

