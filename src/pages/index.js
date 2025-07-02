import Image from "next/image";
import Header from "@/components/headers/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="h-[4000px] ">
       <Hero />
      </main>
      <footer></footer>
    </div>
  );
}
