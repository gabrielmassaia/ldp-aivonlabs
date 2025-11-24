"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LineChart, ShieldCheck, Workflow } from "lucide-react";
import { cases } from "@/data/cases";

const caseIcons = [Workflow, LineChart, ShieldCheck];

export function Cases() {
  return (
    <section id="cases" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-dark pointer-events-none" />

      <div className="container-width relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide">Resultados Reais</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-white leading-tight"
            >
              Impacto que gera <br />
              <span className="text-gradient-primary">crescimento real</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-md text-lg"
          >
            Histórias de empresas que transformaram suas operações com nossa tecnologia.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((item, index) => {
            const Icon = caseIcons[index % caseIcons.length];
            return (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-[#0a0c10] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                  </div>

                  <div className="space-y-4 mb-8 grow">
                    <h3 className="text-xl font-bold text-white">{item.company}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Resultado</p>
                    <p className="text-lg font-bold text-emerald-400">
                      {item.improvement}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
