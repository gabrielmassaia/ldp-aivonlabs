import { InstagramIcon, MailIcon, MessageCircleIcon, SparklesIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#0d0f13] pb-12 pt-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Card className="mb-8 bg-gradient-to-br from-[#0F6D7A]/25 via-[#0a0c10] to-[#1E1E22]/60 p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <Badge variant="outline" className="text-[11px] uppercase tracking-[0.2em]">
                Próximo passo
              </Badge>
              <h3 className="text-2xl font-semibold text-[#EDEEF2]">
                Vamos mapear seu processo e destravar automações?
              </h3>
              <p className="max-w-xl text-sm text-[#cdd0d8]">
                Envie um contato rápido e retornamos com um diagnóstico enxuto para evoluir seu produto ou operação.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/5547991787358"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants("accent", "md"), "shadow-lg shadow-[#FF4D2E]/30")}
              >
                <MessageCircleIcon size={16} className="mr-2" />
                Fale com a Aivon Labs
              </a>
              <a
                href="mailto:aivonlabs@gmail.com"
                className={cn(buttonVariants("ghost", "md"), "border border-white/15 px-5")}
              >
                <MailIcon size={16} className="mr-2" />
                aivonlabs@gmail.com
              </a>
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[#cdd0d8] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-[#EDEEF2]">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0F6D7A]/30 text-[#0F6D7A]">
              <SparklesIcon size={18} />
            </div>
            <div>
              <p className="text-base font-semibold">AIVON LABS TECNOLOGIA LTDA</p>
              <p className="text-xs text-[#a7abb5]">Tecnologia sob medida para PMEs</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://instagram.com/aivonlabs"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:border-white/30"
            >
              <InstagramIcon size={16} />
              Instagram
            </a>
            <a
              href="https://wa.me/5547991787358"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:border-white/30"
            >
              <MessageCircleIcon size={16} />
              WhatsApp
            </a>
            <a
              href="mailto:aivonlabs@gmail.com"
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:border-white/30"
            >
              <MailIcon size={16} />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
