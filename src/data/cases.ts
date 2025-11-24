export type CaseStudy = {
  company: string;
  improvement: string;
  description: string;
};

export const cases: CaseStudy[] = [
  {
    company: "Empresa X | Automação",
    improvement: "-10 horas semanais de tarefas manuais",
    description:
      "Fluxos N8N integrando CRM, financeiro e atendimento com alertas automáticos em cada etapa crítica.",
  },
  {
    company: "Empresa Y | Presença Digital",
    improvement: "+30% de conversão após novo site",
    description:
      "Landing pages rápidas, formulários rastreáveis e integrações que alimentam CRM em tempo real.",
  },
  {
    company: "Empresa Z | Operação Organizada",
    improvement: "Processos enxutos e visão clara do negócio",
    description:
      "Dashboards personalizados, ETL simples e automações de conciliação que reduzem erros humanos.",
  },
];
