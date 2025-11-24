import { Cases } from "@/components/sections/cases";
import { ContactFooter } from "@/components/sections/contact-footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Benefits } from "@/components/sections/benefits";
import { Problems } from "@/components/sections/problems";
import { Products } from "@/components/sections/products";
import { WhyChoose } from "@/components/sections/why-choose";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0c10] text-[#EDEEF2]">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0F6D7A22,transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_60%,#1E1E2211_80%,transparent_100%)]" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Products />
        <Benefits />
        <Cases />
        <WhyChoose />
      </main>
      <ContactFooter />
    </div>
  );
}
