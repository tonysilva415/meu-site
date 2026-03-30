export const GLOBAL = {
  brand: {
    name: 'ACONE',
    tagline: 'Assessoria e Consultoria Empresarial Ltda.',
    colors: {
      primary: '#003e3e',
      secondary: '#008b8b',
    },
    logo: './logo.png',
  },
  navigation: [
    { label: 'Início', href: '/#inicio' },
    // { label: 'Sobre', href: '/sobre' },
    {
      label: 'Plataforma ACONE',
      children: [
        { label: 'Soluções', href: '/#solucoes' },
        { label: 'Central de Gestão', href: '/#gestao' },
        { label: 'Histórico', href: '/#historico' },
        { label: 'Prontuário Eletrônico', href: '/#prontuario' },
        { label: 'Contato', href: '/#contato' },
      ],
    },
    {
      label: 'Programa de Integridade',
      children: [
        { label: 'Documentação', href: 'https://www.acone.com.br/?page_id=1812' },
        { label: 'Canal de Denúncias', href: '/contato' },
        { label: 'Comunicação', href: '/contato' },
      ],
    },
    { label: 'Blog', href: 'https://www.acone.com.br/?page_id=1016' },
  ],
  cta: {
    primary: {
      label: 'Entrar em contato',
      href: '/#contato',
    },
    secondary: {
      label: 'Sobre Nós',
      href: '/sobre',
    },
  },
  socials: [
    {
      label: 'Programa de Integridade',
      href: 'https://www.acone.com.br/?page_id=1812',
    },
    { label: 'Blog', href: 'https://www.acone.com.br/?page_id=1016' },
  ],
}


