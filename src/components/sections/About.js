import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Container centralizado com largura máxima e padding responsivo */}
      <section id="sobre" className="bg-bgcolor w-full px-4 sm:px-12 md:px-8 py-8 xl:px-[68px] xl:py-[56px] justify-center">
        <h2 className="text-center text-white text-2xl md:text-3xl font-prata mb-5 md:mb-10">
          Sobre Mim
        </h2>
        {/* Grid com 1 coluna no mobile e 2 colunas a partir de md */}
        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] lg:grid-cols-2 w-full shadow-[0px_8px_10px_0px_rgba(0,0,0,0.25)]">
          {/* Coluna da imagem */}
          <div className="h-full">
            <Image
              src="/assets/lawyer2.jpg"
              alt="Woman sitting with laptop and coffee"
              width={600}
              height={400}
              className="rounded object-cover w-full h-full md:rounded-tl-[10px] md:rounded-bl-[10px]"
            />
          </div>

          {/* Coluna do texto */}
          <div className="w-full px-4 sm:px-6 py-6 bg-yellow-900 rounded-br-[10px] rounded-bl-[10px] md:rounded-bl-[00px] md:rounded-tr-[10px] md:rounded-br-[10px] flex flex-col justify-center items-start gap-4 md:gap-6 text-white font-inter text-base md:text-lg h-full">
            <p>
              Advogado especializado em Direito do Trabalho, com mais de{" "}
              <strong>8 anos de experiência</strong> na defesa dos direitos dos
              trabalhadores.
            </p>
            <p>
              Ao longo da minha trajetória, atuei em diversas causas
              trabalhistas, sempre com foco em oferecer um atendimento{" "}
              <strong>direto, transparente e comprometido com a justiça</strong>
              .
            </p>
            <p>
              Meu objetivo é garantir que cada cliente entenda seus direitos e
              tenha apoio jurídico de qualidade para tomar as melhores decisões.
            </p>
            <p>
              Seja para analisar um contrato, calcular{" "}
              <strong>verbas rescisórias</strong> ou ingressar com uma ação,
              estou aqui para te orientar com responsabilidade e eficiência.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
