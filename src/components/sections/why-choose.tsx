import { RocketIcon, ShieldCheckIcon, SparklesIcon, WorkflowIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const reasons = [
  "Foco total em resultado",
  "Entregas claras e objetivas",
  "Projeto acompanhado de ponta a ponta",
  "Uso inteligente de automação",
  "Integração com N8N",
  "Soluções escaláveis",
];

export function WhyChoose() {
  return (
    <section id="why" className="bg-[#0a0c10] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[#a7abb5]">Por que escolher</p>
          <h2 className="text-3xl font-semibold text-[#EDEEF2] sm:text-4xl">Aivon Labs é parceira de execução.</h2>
          <p className="max-w-2xl text-sm text-[#cdd0d8]">
            Times enxutos precisam de clareza, velocidade e soluções que chegam em produção. É isso que entregamos.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Card className="bg-[#0f1216]/80">
            <CardHeader className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F6D7A]/25 text-[#0F6D7A]">
                <ShieldCheckIcon size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#a7abb5]">Metodologia</p>
                <CardTitle className="text-[#EDEEF2]">Execução guiada por indicadores</CardTitle>
              </div>
            </CardHeader>
            <CardDescription className="text-[#cdd0d8]">
              Do mapeamento à entrega, cada sprint tem objetivos claros, automações validadas e documentação leve para o time.
            </CardDescription>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-[#dfe2ea]">
                <div className="mb-2 flex items-center gap-2 text-[#FF4D2E]">
                  <RocketIcon size={16} />
                  Go-live acelerado
                </div>
                Publicações assistidas e monitoramento de desempenho logo na primeira semana.
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-[#dfe2ea]">
                <div className="mb-2 flex items-center gap-2 text-[#0F6D7A]">
                  <WorkflowIcon size={16} />
                  Operação conectada
                </div>
                Integrações seguras com APIs e N8N, com logs que sua equipe entende.
              </div>
            </div>
          </Card>

          <Card className="space-y-3 bg-gradient-to-b from-white/10 via-transparent to-white/5">
            <CardHeader className="mb-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF4D2E]/20 text-[#FF4D2E]">
                  <SparklesIcon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#a7abb5]">Prontos para o futuro</p>
                  <CardTitle className="text-[#EDEEF2]">Evolução contínua</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardDescription className="text-[#cdd0d8]">
              Mantemos um roadmap vivo para acompanhar seu crescimento e destravar novas automações com IA.
            </CardDescription>
            <div className="space-y-2 text-sm text-[#dfe2ea]">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                  <Badge variant="outline" className="border-white/20 text-[11px] uppercase tracking-[0.2em]">
                    Aivon Labs
                  </Badge>
                  {reason}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
