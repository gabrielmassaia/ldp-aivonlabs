"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Globe,
  BarChart3,
  ShieldCheck,
  Zap,
  Code2
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Automação Inteligente",
    description: "Fluxos de trabalho automatizados com N8N que eliminam tarefas repetitivas e conectam seu ecossistema.",
    icon: Cpu,
    className: "lg:col-span-2 lg:row-span-2",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    title: "Sites de Alta Performance",
    description: "Desenvolvimento web focado em conversão, SEO e velocidade de carregamento instantânea.",
    icon: Globe,
    className: "lg:col-span-1 lg:row-span-1",
    gradient: "from-accent/20 to-accent/5"
  },
  {
    title: "Dados em Tempo Real",
    description: "Dashboards personalizados para visualizar suas métricas mais importantes.",
    icon: BarChart3,
    className: "lg:col-span-1 lg:row-span-1",
    gradient: "from-emerald-500/20 to-emerald-500/5"
  },
  {
    title: "Sistemas Sob Medida",
    description: "Software desenvolvido especificamente para as regras e necessidades do seu negócio.",
    icon: Code2,
    className: "lg:col-span-2 lg:row-span-1",
    gradient: "from-purple-500/20 to-purple-500/5"
  },
  {
    title: "Segurança Avançada",
    description: "Proteção de dados e conformidade com as melhores práticas de segurança.",
    icon: ShieldCheck,
    className: "lg:col-span-1 lg:row-span-1",
    gradient: "from-blue-500/20 to-blue-500/5"
  },
  {
    title: "Escalabilidade",
    description: "Infraestrutura preparada para crescer junto com sua empresa.",
    icon: Zap,
    className: "lg:col-span-1 lg:row-span-1",
    gradient: "from-orange-500/20 to-orange-500/5"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white"
          >
            Tudo o que você precisa para <span className="text-gradient-primary">evoluir</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Nossa stack tecnológica completa para transformar sua operação digital.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative p-6 rounded-3xl border border-white/5 bg-[#0a0c10] overflow-hidden hover:border-white/10 transition-colors",
                feature.className
              )}
            >
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br",
                feature.gradient
              )} />

              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-4 p-3 w-fit rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
