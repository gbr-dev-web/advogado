import Image from "next/image";
import Header from "@/components/headers/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main
        className="w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop')",
        }}
      >
        {/* Conteúdo opcional */}
      </main>
      <footer></footer>
    </div>
  );
}
