import { Cases } from "@/components/sections/cases";
import { ContactFooter } from "@/components/sections/contact-footer";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { InteractiveBackground } from "@/components/ui/interactive-background";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <InteractiveBackground />
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
