export type CaseStudy = {
  company: string;
  improvement: string;
  description: string;
};

export const cases: CaseStudy[] = [
  {
    company: "TechFlow | Automação",
    improvement: "-10 horas semanais de tarefas manuais",
    description:
      "Fluxos N8N integrando CRM, financeiro e atendimento com alertas automáticos em cada etapa crítica.",
  },
  {
    company: "NovaWeb | Presença Digital",
    improvement: "+30% de conversão após novo site",
    description:
      "Landing pages rápidas, formulários rastreáveis e integrações que alimentam CRM em tempo real.",
  },
  {
    company: "LogiSystem | Operação Organizada",
    improvement: "Processos enxutos e visão clara do negócio",
    description:
      "Dashboards personalizados, ETL simples e automações de conciliação que reduzem erros humanos.",
  },
];
