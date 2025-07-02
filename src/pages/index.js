import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Valores from "@/components/Valores";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="h-[4000px] ">
        <Hero />
        <About />
        <Valores />
      </main>
      <footer></footer>
    </div>
  );
}
