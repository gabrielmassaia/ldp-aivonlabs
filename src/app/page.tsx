import { Cases } from "@/components/sections/cases";
import { ContactFooter } from "@/components/sections/contact-footer";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Cases />
      </main>
      <ContactFooter />
    </div>
  );
}
