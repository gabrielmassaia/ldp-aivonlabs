"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#030303] pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0F6D7A15,transparent_50%)]" />

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Vamos construir algo <br />
                <span className="text-gradient-primary">extraordinário?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Agende uma consultoria gratuita e descubra como podemos escalar sua operação com tecnologia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/5547991787358"
                target="_blank"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-accent hover:bg-accent/90 rounded-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:aivonlabs@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </a>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 lg:pl-12">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Links Rápidos</h3>
              <ul className="space-y-4">
                {["Soluções", "Benefícios", "Casos de Sucesso", "Sobre Nós"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Contato</h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:aivonlabs@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    aivonlabs@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/aivonlabs" target="_blank" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                    <Instagram className="w-4 h-4" />
                    @aivonlabs
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Santa Catarina, Brasil
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs">
              AL
            </div>
            <span className="text-white font-bold tracking-tight">Aivon Labs</span>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} Aivon Labs Tecnologia LTDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
