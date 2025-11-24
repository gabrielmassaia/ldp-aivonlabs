export type Product = {
  name: string;
  description: string;
  features: string[];
  highlight: string;
};

export type Project = {
  title: string;
  result: string;
  detail: string;
};

export const products: Product[] = [
  {
    name: "Aivon Flow",
    description:
      "Automação inteligente via N8N conectando CRM, financeiro e atendimento em um único fluxo rastreável.",
    features: [
      "Integração bidirecional entre ferramentas do dia a dia",
      "Alertas pró-ativos com redução de gargalos",
      "Monitoramento visual dos processos críticos",
    ],
    highlight: "Automatiza rotinas e devolve horas para o time.",
  },
  {
    name: "Aivon Desk",
    description:
      "Mini CRM customizável que organiza leads, status e follow-ups com automações sob medida.",
    features: [
      "Funis personalizáveis por operação",
      "Workflows para disparos, atualizações e notificações",
      "Visão clara de prioridades e produtividade da equipe",
    ],
    highlight: "Organiza atendimento e cria consistência em vendas.",
  },
  {
    name: "Aivon Pages",
    description:
      "Sites rápidos, bonitos e otimizados para captar oportunidades com métricas prontas.",
    features: [
      "Performance alta com SEO técnico",
      "Páginas dinâmicas com componentes reutilizáveis",
      "Publicação assistida e monitoramento de conversão",
    ],
    highlight: "Eleva a presença digital e gera leads reais.",
  },
  {
    name: "Aivon Sync",
    description:
      "Integra APIs diversas, unifica dados e cria painéis enxutos para decisões rápidas.",
    features: [
      "Conectores flexíveis e documentação clara",
      "ETLs simples para consolidar informações",
      "Logs centralizados para rastreabilidade",
    ],
    highlight: "Dados confiáveis, de forma simples e escalável.",
  },
];

export const projects: Project[] = [
  {
    title: "Clínica estética com agendamentos automáticos",
    result: "Filas de espera organizadas e pacientes recebendo confirmações imediatas.",
    detail: "Calendário integrado, lembretes e dashboards de ocupação semanal.",
  },
  {
    title: "Plataforma de cursos com dashboard administrativo",
    result: "Gestão de matrículas, trilhas e pagamentos em um painel único.",
    detail: "Automação de emissão de notas e notificações de progresso.",
  },
  {
    title: "ERP enxuto para microempresas",
    result: "Controle de estoque, vendas e financeiro sem burocracia.",
    detail: "Visão de fluxo de caixa e indicadores de giro de produtos.",
  },
  {
    title: "Integração financeira via N8N",
    result: "Conciliação automática e alertas de divergência em tempo real.",
    detail: "Conexão entre bancos, ERP e BI com logs rastreáveis.",
  },
];
