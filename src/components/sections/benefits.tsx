import { CheckIcon, MinusIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";

const positives = ["Produtividade real", "Organização de processos", "Conversão crescente"];
const negatives = ["Retrabalho", "Processos manuais", "Erros humanos"];

export function Benefits() {
  return (
    <section id="benefits" className="bg-[#0a0c10] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#a7abb5]">Benefícios reais</p>
            <h2 className="text-3xl font-semibold text-[#EDEEF2] sm:text-4xl">Resultados que o time sente no dia a dia.</h2>
          </div>
          <p className="max-w-xl text-sm text-[#cdd0d8]">
            Implementamos com clareza, treinamos sua equipe e acompanhamos indicadores para garantir evolução contínua.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-gradient-to-br from-[#0F6D7A]/20 via-[#0f1216] to-[#1E1E22]/40">
            <div className="mb-3 text-sm uppercase tracking-[0.2em] text-[#a7abb5]">+</div>
            <div className="space-y-3 text-[#EDEEF2]">
              {positives.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F6D7A]/30 text-[#0F6D7A]">
                    <CheckIcon size={18} />
                  </div>
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-[#1E1E22]/50 via-[#0a0c10] to-[#0F6D7A]/10">
            <div className="mb-3 text-sm uppercase tracking-[0.2em] text-[#a7abb5]">-</div>
            <div className="space-y-3 text-[#EDEEF2]">
              {negatives.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF4D2E]/15 text-[#FF4D2E]">
                    <MinusIcon size={18} />
                  </div>
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
