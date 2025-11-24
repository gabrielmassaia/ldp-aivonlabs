"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { MessageCircleIcon, SparklesIcon } from "@/components/icons";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Soluções", href: "#products" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Casos", href: "#cases" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const isMobile = useMobile();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1216]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="#hero" className="flex items-center gap-2 text-[#EDEEF2]">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F6D7A] to-[#1E1E22]">
            <SparklesIcon size={18} />
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.2em] text-[#cdd0d8]">Aivon Labs</p>
            <p className="text-base font-semibold">Tecnologia LTDA</p>
          </div>
        </Link>

        {!isMobile ? (
          <nav className="flex items-center gap-8 text-sm font-medium text-[#dfe2ea]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5547991787358"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants("accent", "sm"), "shadow-lg shadow-[#FF4D2E]/30")}
            >
              <MessageCircleIcon size={16} className="mr-2" />
              Fale com a Aivon Labs
            </a>
          </nav>
        ) : (
          <a
            href="https://wa.me/5547991787358"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants("accent", "sm"), "shadow-lg shadow-[#FF4D2E]/30")}
          >
            <MessageCircleIcon size={16} className="mr-2" />
            Falar agora
          </a>
        )}
      </div>
    </header>
  );
}
