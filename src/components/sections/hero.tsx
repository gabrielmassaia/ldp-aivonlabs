import { ArrowRightIcon, InstagramIcon, MessageCircleIcon, RocketIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#0f1216] via-[#0d0f13] to-[#0a0c10]"
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-[#0F6D7A]/30 blur-[120px]" />
        <div className="absolute right-1/4 top-32 h-80 w-80 rounded-full bg-[#FF4D2E]/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#ffffff0d,transparent_40%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 md:px-6 lg:pt-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-6 text-[#EDEEF2]">
            <Badge className="w-fit bg-white/10 text-[#EDEEF2]">Tecnologia sob medida</Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Tecnologia sob medida para escalar o seu negócio.
            </h1>
            <p className="max-w-2xl text-lg text-[#cdd0d8] sm:text-xl">
              Websites, sistemas e automações inteligentes que aumentam sua produtividade e reduzem retrabalho. Tudo pronto
              para entrar em produção e gerar resultado real.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/5547991787358"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants("accent", "lg"), "shadow-lg shadow-[#FF4D2E]/30")}
              >
                <MessageCircleIcon size={18} className="mr-2" />
                Fale com a Aivon Labs
              </a>
              <a
                href="https://instagram.com/aivonlabs"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants("ghost", "lg"), "border border-white/15 px-6")}
              >
                <InstagramIcon size={18} className="mr-2" />
                Instagram
              </a>
              <Button variant="ghost" size="lg" className="gap-2 text-[#cdd0d8]">
                <RocketIcon size={18} />
                Projetos prontos para decolar
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 text-sm text-[#cdd0d8] sm:grid-cols-3">
              {["Automação com N8N", "Sistemas sob medida", "Sites rápidos e rastreáveis"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <ArrowRightIcon size={16} className="text-[#FF4D2E]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#FF4D2E14,transparent_45%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-2xl bg-[#0f6d7a]/10 px-4 py-3 text-sm text-[#EDEEF2]">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#a7abb5]">Status</p>
                  <p className="font-semibold">Tudo conectado</p>
                </div>
                <Badge variant="success">em produção</Badge>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#1E1E22]/70 p-5 text-[#EDEEF2] shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#a7abb5]">Operação</p>
                    <p className="text-lg font-semibold">Fluxo automatizado</p>
                  </div>
                  <Badge variant="outline" className="text-xs">N8N + API</Badge>
                </div>
                <div className="space-y-3 text-sm text-[#cdd0d8]">
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                    <span>CRM & atendimento sincronizados</span>
                    <span className="text-[#FF4D2E]">-10h/sem</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                    <span>Alertas pró-ativos e logs claros</span>
                    <span className="text-emerald-400">98% uptime</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                    <span>Dashboard com métricas de conversão</span>
                    <span className="text-[#cdd0d8]">real time</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-xs text-[#cdd0d8]">
                &ldquo;Aivon Labs mapeou nossos processos, automatizou etapas e hoje a equipe tem foco no que importa.&rdquo;
                <p className="mt-2 text-[#EDEEF2]">— Equipe de Operações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
