import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Valores from "@/components/sections/Valores";
import Precos from "@/components/sections/Precos";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="">
        <Hero />
        <About />
        <Valores />
        <Precos />
        <CTA/>
        <FAQ/>
      </main>
      <footer></footer>
    </div>
  );
}
