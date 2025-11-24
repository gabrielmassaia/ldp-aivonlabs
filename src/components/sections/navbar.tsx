"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Soluções", href: "#products" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Casos", href: "#cases" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#030303]/80 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container-width flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-linear-to-br from-primary/20 to-accent/10 p-px">
               <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/10 opacity-50" />
               <div className="relative h-full w-full rounded-xl bg-[#030303]/90 flex items-center justify-center">
                  <Image
                    src="/images/logoaivon.png"
                    alt="Aivon Labs"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
               </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Aivon Labs
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Tecnologia
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/5547991787358"
              target="_blank"
              className="glass-button flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all"
            >
              <MessageCircle size={16} className="text-accent" />
              Fale Conosco
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#030303] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium text-white/80 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-white/10" />
              <Link
                href="https://wa.me/5547991787358"
                target="_blank"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary/10 text-primary font-medium"
              >
                <MessageCircle size={20} />
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
