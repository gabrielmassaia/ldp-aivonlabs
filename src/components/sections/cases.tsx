import { LineChartIcon, ShieldCheckIcon, WorkflowIcon } from "@/components/icons";
import { cases } from "@/data/cases";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const caseIcons = [WorkflowIcon, LineChartIcon, ShieldCheckIcon];

export function Cases() {
  return (
    <section id="cases" className="bg-[#0d0f13] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[#a7abb5]">Casos de uso</p>
          <h2 className="text-3xl font-semibold text-[#EDEEF2] sm:text-4xl">Storytelling de operações reais.</h2>
          <p className="max-w-2xl text-sm text-[#cdd0d8]">
            Histórias fictícias, mas com a mesma disciplina que aplicamos em clientes reais: diagnóstico, solução enxuta e
            acompanhamento contínuo.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {cases.map((item, index) => {
            const Icon = caseIcons[index % caseIcons.length];
            return (
              <Card key={item.company} className="h-full bg-[#0f1216]/80">
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Icon size={18} />
                    </div>
                    <div>
                      <CardTitle className="text-[#EDEEF2]">{item.company}</CardTitle>
                      <Badge variant="outline" className="text-[11px] uppercase tracking-[0.2em]">Transformação</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-[#cdd0d8]">{item.improvement}</CardDescription>
                <p className="mt-3 text-sm text-[#dfe2ea]">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
