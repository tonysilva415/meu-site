import { Link } from 'react-router-dom'
import { FiPackage, FiDatabase, FiTrendingUp } from 'react-icons/fi'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading'

export function AlmoxarifadoPage() {
  const features = [
    'Permitir o cadastro e manutenção de setores em cada unidade de saúde;',
    'Permitir o controle de estoque simultaneamente em diversos locais (farmácias, almoxarifados) nas unidades de saúde;',
    'Permitir o cadastro de produtos, materiais médico-hospitalares, materiais de limpeza, materiais de expediente, insumos e outros;',
    'Permitir o cadastro e manutenção de lotes de produtos, incluindo data de vencimento e quantidade;',
    'Permitir o cadastro e manutenção de fornecedores;',
    'Importar XML de NF-e para dar entrada no estoque e criar cadastros de fornecedores, produtos e lotes automaticamente;',
    'Detectar automaticamente medicamentos de acordo com a tabela ABC Farma;',
    'Permitir a entrada de produtos por compras, doações ou transferências, informando o fornecedor, fabricante e o setor no estoque;',
    'Permitir a classificação dos medicamentos por grupos e subgrupos.',
  ]

  return (
    <div className="bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[url('/marketing-bg6-2048x1076-2.png')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="text-center">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Almoxarifado</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FiPackage className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">Controle de Estoque</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Gestão completa de estoques multiunidades em tempo real, garantindo rastreabilidade e segurança.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FiDatabase className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">Integração Automática</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Importação automática de XML de NF-e e integração com tabela ABC Farma para detecção de medicamentos.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FiTrendingUp className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">Gestão Inteligente</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Controle de lotes, vencimentos e classificação por grupos, otimizando a gestão de materiais.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-12" delay={80}>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900">Funcionalidades</h2>
              <ul className="space-y-3 text-base leading-relaxed text-neutral-600">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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

