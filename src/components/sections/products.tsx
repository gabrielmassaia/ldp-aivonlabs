import { CircuitBoardIcon, CpuIcon, LayersIcon, WorkflowIcon } from "@/components/icons";
import { products, projects } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const productIcons = [WorkflowIcon, CpuIcon, LayersIcon, CircuitBoardIcon];

export function Products() {
  return (
    <section id="products" className="bg-[#0d0f13] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[#a7abb5]">Produtos & Serviços</p>
          <h2 className="text-3xl font-semibold text-[#EDEEF2] sm:text-4xl">
            Soluções próprias pensadas para produtividade real.
          </h2>
          <p className="max-w-3xl text-sm text-[#cdd0d8]">
            Cada entrega nasce de um diagnóstico claro, mapeamento de processos e construção enxuta com foco em produção.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((product, index) => {
            const Icon = productIcons[index % productIcons.length];
            return (
              <Card key={product.name} className="h-full">
                <CardHeader className="mb-2 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      <Icon size={18} />
                    </div>
                    <div>
                      <CardTitle className="text-[#EDEEF2]">{product.name}</CardTitle>
                      <Badge variant="outline" className="mt-1 text-[11px] uppercase tracking-[0.2em]">
                        Aivon Labs
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-base text-[#cdd0d8]">{product.description}</CardDescription>
                <CardContent className="mt-4 space-y-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-[#dfe2ea]">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#FF4D2E]" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </CardContent>
                <div className="mt-4 rounded-xl bg-white/5 p-4 text-sm text-[#EDEEF2]">
                  {product.highlight}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="h-full bg-[#0f1216]/80">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#a7abb5]">Projeto entregue</p>
                    <CardTitle className="text-[#EDEEF2]">{project.title}</CardTitle>
                  </div>
                  <Badge variant="success">Resultado</Badge>
                </div>
              </CardHeader>
              <CardDescription className="text-[#cdd0d8]">{project.result}</CardDescription>
              <CardContent className="mt-4 text-sm text-[#dfe2ea]">{project.detail}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
