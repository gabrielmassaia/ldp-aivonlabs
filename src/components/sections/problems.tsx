import { MessageCircleIcon, WorkflowIcon, LayersIcon, BotIcon, GaugeIcon } from "@/components/icons";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  {
    title: "Processos manuais lentos",
    description: "Automatizamos tarefas repetitivas e entregamos alertas que evitam gargalos.",
    icon: WorkflowIcon,
  },
  {
    title: "Planilhas caóticas",
    description: "Centralizamos dados em painéis claros, com rastreabilidade e versionamento.",
    icon: LayersIcon,
  },
  {
    title: "Falta de presença online",
    description: "Sites rápidos, responsivos e medidos para gerar leads reais.",
    icon: MessageCircleIcon,
  },
  {
    title: "Retrabalho",
    description: "Fluxos consistentes que eliminam erros e repetição de atividades.",
    icon: BotIcon,
  },
  {
    title: "Falta de automação",
    description: "Workflows conectados a APIs e N8N para escalar sem aumentar equipe.",
    icon: GaugeIcon,
  },
];

export function Problems() {
  return (
    <section id="problems" className="bg-[#0a0c10] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#a7abb5]">Problemas que resolvemos</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#EDEEF2] sm:text-4xl">
              Sua operação sem ruído, seu time focado no que importa.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-[#cdd0d8]">
            Identificamos gargalos, automatizamos etapas e criamos interfaces que tornam o trabalho previsível.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <Icon size={18} />
                  </div>
                </CardHeader>
                <CardTitle className="text-[#EDEEF2]">{item.title}</CardTitle>
                <CardDescription className="mt-2">{item.description}</CardDescription>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
