export const heroContent = {
  title: 'ACONE',
  subtitle: 'Assessoria e Consultoria Empresarial Ltda.',
  description:
    'A ACONE é reconhecida pelo desenvolvimento de projetos para a regulação do Sistema Único de Saúde (SUS). Há vinte anos, inovamos em tecnologia para apoiar municípios na gestão da saúde com eficiência, segurança e humanização.',
  primaryAction: {
    label: 'Fale com a equipe',
    href: '/#contato',
  },
  secondaryAction: {
    label: 'Conheça nossa história',
    href: '/sobre',
  },
  highlights: [
    { value: 20, suffix: ' anos', description: 'de inovação em gestão em saúde' },
    { value: 1, prefix: 'R$ ', suffix: ' bi', description: 'em economia gerada em projetos' },
    { value: 100, suffix: '% SUS', description: 'Cobertura completa de regulação pública' },
  ],
}

export const systemOverview = {
  title: 'Sistema Completo para Secretarias Municipais',
  description:
    'Um ecossistema único que integra todos os módulos necessários para Secretarias Municipais de Saúde, do atendimento básico à alta complexidade, conectando equipes, serviços e cidadãos.',
  action: {
    label: 'Converse com especialistas',
    href: '/#contato',
  },
}

export const governanceSection = {
  title: 'Central de Gestão e Governanças',
  projects: [
    {
      year: '1999',
      description:
        'Implantação da Central de Marcação de Consultas e Exames via internet no Centro de Referência da Mulher (SE). Projeto destaque no Jornal Nacional.',
      link: 'http://www.youtube.com/watch?v=LycE9QKHZBM',
    },
    {
      year: '2001',
      description:
        'Descentralização da rede de atenção especializada e criação da Central de Regulação on-line em Sergipe.',
    },
    {
      year: '2006/2007',
      description:
        'Desenvolvimento do SISREG III para o Ministério da Saúde / DATASUS.',
    },
    {
      year: '2011',
      description:
        'Criação da Central de Gestão e Governança com apoio do projeto INOVA-SE (FINEP).',
    },
  ],
  objectives: [
    'Gerir os recursos do SUS com eficiência e transparência.',
    'Acompanhar o fluxo do paciente em toda a jornada de atendimento.',
    'Qualificar o controle de acessos entre municípios.',
    'Evoluir protocolos e critérios de acesso aos serviços ofertados.',
    'Estabelecer metas e cenários de governança monitoráveis.',
    'Disponibilizar sala de situação com dados em tempo real.',
  ],
}

export const serviceModules = [
  {
    title: 'Atenção Básica',
    description:
      'Controle completo das unidades básicas, acompanhando equipes, agendas, indicadores e prontuários.',
    href: '/atencao-basica',
  },
  {
    title: 'Média Complexidade',
    description:
      'Gestão da oferta e dos procedimentos das unidades próprias e credenciadas com visão 360º.',
    href: '/media-complexidade',
  },
  {
    title: 'Processos',
    description:
      'Definição e redefinição de fluxos sem nova codificação, com tecnologia configurável para o SUS.',
    href: '/processos',
  },
  {
    title: 'Almoxarifado',
    description:
      'Monitoramento de estoques multiunidades em tempo real, garantindo rastreabilidade e segurança.',
    href: '/almoxarifado',
  },
  {
    title: 'Regulação de APAC',
    description:
      'Validação automática das regras do SUS e controle da alta complexidade com transparência.',
    href: '/regulacao-apac',
  },
  {
    title: 'Prontuário Eletrônico',
    description:
      'Informações completas do paciente com base no e-SUS, acessíveis em qualquer dispositivo.',
    href: '/prontuario-eletronico',
  },
]

export const verticalSolutions = [
  {
    title: 'Vigilância Sanitária',
    href: '/vigilancia-sanitaria',
    description:
      'Gestão integrada de inspeções, licenças e monitoramento de estabelecimentos com painéis estratégicos.',
  },
  {
    title: 'Agente de Endemias',
    href: '/agente-endemias',
    description:
      'Aplicativos de campo para controle de agravos e endemias com georreferenciamento e relatórios inteligentes.',
  },
]

export const soapSection = {
  title: 'Prontuário Eletrônico SOAP',
  description:
    'O método SOAP (Subjetivo, Objetivo, Avaliação e Plano) estrutura a evolução clínica com registros claros, completos e padronizados.',
  steps: [
    { label: 'Subjetivo', description: 'Registro das queixas e percepções relatadas pelo cidadão.' },
    { label: 'Objetivo', description: 'Observações clínicas, sinais vitais e resultados de exames.' },
    { label: 'Avaliação', description: 'Interpretação profissional consolidando hipóteses diagnósticas.' },
    { label: 'Plano', description: 'Condutas, prescrições e encaminhamentos definidos.' },
  ],
}

export const historySection = {
  title: 'Nosso Histórico',
  paragraphs: [
    'A ACONE transformou a regulação do SUS ao conectar cidadãos, profissionais e gestores em uma plataforma única. Utilizamos a internet e tecnologias emergentes para democratizar o acesso à saúde.',
    'Com soluções robustas e alta disponibilidade, nossos sistemas operam 24 horas por dia, 7 dias por semana, sustentando decisões estratégicas, garantindo governança e entregando resultados expressivos aos municípios.',
  ],
  facts: [
    { value: 24, suffix: '/7', label: 'Disponibilidade' },
    { value: 1, prefix: 'R$ ', suffix: ' bi', label: 'Economia gerada' },
    { value: 40, prefix: '+', suffix: ' municípios', label: 'Municípios atendidos' },
  ],
}

export const videoSection = {
  title: 'ACONE no Jornal Nacional',
  description:
    'Conheça a reportagem que destacou a Central de Marcação on-line desenvolvida para o governo de Sergipe, um marco em inovação no SUS.',
  videoUrl: 'https://www.youtube.com/embed/LycE9QKHZBM',
}

export const dataAccessSection = {
  title: 'Dados na ponta dos dedos',
  description:
    'Com o Prontuário Eletrônico ACONE, todos os dados clínicos estão em um só lugar. Profissionais acessam histórico completo, evoluções, prescrições e indicadores personalizados para qualificar o cuidado.',
  action: {
    label: 'Solicite uma demonstração',
    href: '/#contato',
  },
  metrics: [
    { label: 'Atendimentos', value: 28450 },
    { label: 'Pendências', value: 146 },
    { label: 'Satisfação', value: 94, suffix: '%' },
  ],
}

export const customizableEhrSection = {
  title: 'Prontuário customizável',
  bullets: [
    'Integração do receituário com estoque e farmácias.',
    'Consulta rápida do histórico completo do paciente.',
    'Acesso remoto seguro para equipes em campo.',
    'Camadas de segurança e governança de dados.',
    'Layout flexível para diferentes linhas de cuidado.',
  ],
  action: {
    label: 'Saiba mais',
    href: '/prontuario-eletronico',
  },
}

export const contactSection = {
  eyebrow: 'Contato',
  title: 'Onde nos encontrar',
  description:
    'Estamos no SergipeTec, próximo à Universidade Federal de Sergipe, com acesso rápido à BR-101 e estacionamento exclusivo para visitantes.',
  address: [
    'SergipeTec',
    'Rua José Conrado de Araújo, 731 · Bloco 03 · Sala 02 · Térreo',
    'CEP 49107-232 · São Cristóvão (Rosa Elze) · Sergipe',
  ],
  contacts: [
    {
      label: 'Celular / WhatsApp',
      value: '+55 79 8131-1809',
      href: 'https://wa.me/557981311809',
      icon: 'phone',
    },
    {
      label: 'E-mail',
      value: 'comercial@acone.com.br',
      href: 'mailto:comercial@acone.com.br',
      icon: 'mail',
    },
  ],
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7834.862149303455!2d-37.1094978570312!3d-10.930773823446051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3b3cb25449b%3A0xeee3e79bb628056a!2sACONE%20-%20ASSESSORIA%20E%20CONSULTORIA%20EMPRESARIAL%20LTDA!5e0!3m2!1sen!2sbr!4v1720013419736!5m2!1sen!2sbr',
  parkingInfo: 'Estacionamento privativo no SergipeTec para visitantes e equipes parceiras.',
  action: {
    label: 'Fale com a equipe',
    href: 'https://wa.me/557981311809',
  },
}

export const successCases = {
  title: 'Cases de sucesso',
  description:
    'Mudando a gestão de saúde em municípios como Aracaju, Lagarto, Estância, Itabaiana e Propriá.',
  metrics: [
    { value: 40000, label: 'Consultas de especialidade reguladas' },
    { value: 350000, label: 'Exames laboratoriais e de imagem' },
  ],
}

export const finalCta = {
  eyebrow: 'Pronto para mudar?',
  title: 'Vamos transformar a gestão de saúde do seu município.',
  action: {
    label: 'Fale com a ACONE',
    href: '/#contato',
  },
}

export const aboutPage = {
  hero: {
    eyebrow: 'Sobre nós',
    title: 'A história da ACONE',
    description:
      'Desde 2001, transformamos a regulação do SUS e a gestão de secretarias municipais com tecnologia, metodologias e governança centradas no cidadão.',
    highlights: [
      { value: '2001', label: 'Fundação da ACONE' },
      { value: '30 mi+', label: 'Procedimentos regulados' },
      { value: 'R$ 1 bi', label: 'Economia estimada para o SUS' },
    ],
    action: {
      label: 'Fale com a equipe',
      href: '/#contato',
    },
  },
  mission: {
    paragraphs: [
      'Fomos pioneiros em levar a internet aos serviços de saúde pública, criando o primeiro sistema on-line de marcação de consultas do SUS e conectando municípios em uma mesma plataforma colaborativa.',
      'Nosso time combina especialistas em saúde pública, tecnologia e governança para apoiar secretarias na transformação digital, desde a regulação até o prontuário eletrônico.',
    ],
    values: [
      {
        title: 'Inovação contínua',
        description:
          'Projetos financiados por programas nacionais de inovação e evolução constante da plataforma SaúdeNet.',
      },
      {
        title: 'Atuação nacional',
        description:
          'Presença em municípios de Sergipe e região Nordeste, com suporte dedicado e operação 24/7.',
      },
      {
        title: 'Impacto social',
        description:
          'Tecnologia aplicada para reduzir filas, ampliar o acesso e gerar eficiência financeira para o SUS.',
      },
    ],
  },
  timeline: [
    {
      year: '1999',
      title: 'Central de marcação on-line',
      description:
        'Implantamos a Central de Consultas e Exames via internet em Sergipe, eliminando filas presenciais e integrando municípios.',
    },
    {
      year: '2001',
      title: 'Fundação da ACONE',
      description:
        'Ampliamos a regulação para todo o estado com o uso do PDR, PPI e BPA automatizados, criando o cartão SUS virtual.',
    },
    {
      year: '2006/2007',
      title: 'Transferência de tecnologia',
      description:
        'Desenvolvemos o SISREG III para o Ministério da Saúde, primeiro sistema online do órgão com integração ao Cartão SUS.',
    },
    {
      year: '2012/2016',
      title: 'Regulação de alta complexidade',
      description:
        'Implantamos centrais estaduais para APAC, AIH e ambulatorial, obtendo financiamento do Programa TECNOVA para novas soluções.',
    },
    {
      year: '2017',
      title: 'SaúdeNet 4.0',
      description:
        'Lançamos a nova geração da plataforma com painéis executivos e atendimento a 2,2 milhões de cidadãos.',
    },
  ],
  videos: [
    {
      title: 'Reportagem no Jornal Nacional',
      description:
        'Conheça a matéria da Rede Globo que destacou a inovação da ACONE na regulação do SUS.',
      url: 'https://www.youtube.com/embed/LycE9QKHZBM',
    },
    {
      title: 'Tecnologia para transformar cidades',
      description:
        'Veja como a plataforma SaúdeNet integra fluxos de regulação, prontuário eletrônico e governança.',
      url: 'https://www.youtube.com/embed/M8pKtGjJSeY',
    },
  ],
  videosSection: {
    title: 'Na mídia e em constante evolução',
    description:
      'Nossa trajetória ganhou destaque nacional e continua avançando com soluções digitais que elevam o cuidado em saúde.',
  },
  systemModules: {
    title: 'Módulos do Sistema',
    description:
      'Uma solução inteligente para um SUS eficiente. Nossa plataforma integrada oferece diversos módulos que cobrem todas as necessidades de gestão em saúde pública.',
    modules: [
      {
        category: 'Atenção Básica',
        items: [
          'Hospedagem do E-SUS',
          'Indicadores da Atenção Básica',
          'Aplicativo do ACS',
          'Prontuário eletrônico E-SUS (SOAP) / Teleatendimento',
        ],
      },
      {
        category: 'Regulação e Complexidade',
        items: [
          'Regulação de Consultas e exames / APAC / AIH',
          'Auditoria de AIH',
          'TFD (Tratamento Fora do Domicílio)',
          'BPA automático (E-SUS, SIA, APAC e SIH)',
        ],
      },
      {
        category: 'Gestão e Recursos',
        items: [
          'Almoxarifado / Farmácia',
          'Resultado de exames',
          'Prontuário eletrônico (CEO, CERIV, UPA, etc.) / Teleatendimento',
        ],
      },
      {
        category: 'Soluções Especiais',
        items: [
          'Painel de chamada na TV',
          'Aplicativo ACE',
          'Vigilância Sanitária',
          'Hemocentros',
          'Aplicativo do CIDADÃO',
        ],
      },
    ],
  },
}

export const contactFormPage = {
  hero: {
    title: 'Fale com a ACONE',
    description:
      'Escolha o tipo de mensagem e envie sua solicitação, dúvida ou denúncia. Nossa equipe responderá o mais breve possível.',
  },
  messageTypes: [
    {
      id: 'comunicacao',
      title: 'Comunicação',
      description: 'Dúvidas, sugestões, solicitações de informações sobre nossos produtos e serviços.',
    },
    {
      id: 'denuncia',
      title: 'Canal de Denúncias',
      description: 'Reporte irregularidades ou violações ao nosso Programa de Integridade de forma anônima e segura.',
    },
  ],
  form: {
    nameLabel: 'Nome',
    namePlaceholder: 'Seu nome completo (opcional)',
    emailLabel: 'E-mail',
    emailPlaceholder: 'seu@email.com (opcional)',
    messageLabel: 'Mensagem',
    messagePlaceholder: 'Descreva sua solicitação, dúvida ou denúncia...',
    captchaLabel: 'Validação',
    submitLabel: 'Enviar mensagem',
    submittingLabel: 'Enviando...',
    successMessage: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    errorMessage: 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.',
  },
}


