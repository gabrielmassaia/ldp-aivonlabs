"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container-width relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Tecnologia sob medida</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white">
            Escale seu negócio com <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-400">Inteligência</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Desenvolvemos ecossistemas digitais de alta performance. Sites, automações e sistemas que transformam visitantes em clientes e dados em lucro.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5547991787358"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-accent hover:bg-accent/90 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              <span className="mr-2">Começar Projeto</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
            </a>

            <a
              href="#cases"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full backdrop-blur-sm"
            >
              Ver Cases
            </a>
          </div>

          <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground border-t border-white/5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Entregas Rápidas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Suporte Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Alta Conversão</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
           <div className="relative w-full max-w-[500px] aspect-square">
              {/* Abstract decorative circles */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />

              {/* Central Card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-sm glass-panel rounded-2xl p-6 shadow-2xl border-t border-white/10">
                   <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                         <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                            <p className="text-sm font-medium text-white">Performance</p>
                            <p className="text-xs text-emerald-400">+127% este mês</p>
                         </div>
                      </div>
                      <div className="px-2 py-1 rounded-md bg-white/5 text-xs text-white/60">Live</div>
                   </div>

                   <div className="space-y-4">
                      <div className="h-24 rounded-lg bg-linear-to-r from-primary/10 to-transparent relative overflow-hidden group">
                         <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                         <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-primary/50 to-transparent" />
                         <div className="p-3">
                            <div className="w-1/2 h-2 bg-white/10 rounded-full mb-2" />
                            <div className="w-1/3 h-2 bg-white/5 rounded-full" />
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                         <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                            <p className="text-xs text-muted-foreground mb-1">Leads</p>
                            <p className="text-lg font-bold text-white">2,543</p>
                         </div>
                         <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                            <p className="text-xs text-muted-foreground mb-1">Conversão</p>
                            <p className="text-lg font-bold text-white">4.8%</p>
                         </div>
                      </div>
                   </div>

                   {/* Floating Elements */}
                   <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -right-12 -top-12 p-4 glass-panel rounded-xl border border-white/10"
                   >
                      <MessageCircle className="w-6 h-6 text-accent" />
                   </motion.div>
                </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
