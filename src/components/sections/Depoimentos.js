import { useState } from "react";

const depoimentos = [
  {
    texto:
      "“O Dr. Rafael foi essencial no meu processo trabalhista. Sempre atencioso, explicou cada etapa com clareza e conquistou um ótimo resultado para mim.”",
    autor: "Ana Oliveira",
  },
  {
    texto:
      "“Profissional dedicado e comprometido. Me ajudou a resolver meu caso com muita transparência e eficiência.”",
    autor: "Carlos Silva",
  },
  {
    texto:
      "“Recomendo fortemente o Dr. Rafael. Atendimento personalizado e resultados excelentes.”",
    autor: "Mariana Souza",
  },
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);

  function handlePrev() {
    setIndex((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
  }

  function handleNext() {
    setIndex((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
  }

  return (
    <section
      id="depoimentos"
      className="w-full bg-[#f7f7f7] px-4 py-12 sm:px-10 lg:px-30"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-8 items-center">
        {/* Coluna da Esquerda */}
        <div className="flex flex-col gap-4 text-black text-base font-inter md:text-lg">
          <h2 className="text-4xl font-prata">Depoimentos</h2>
          <p>
            Histórias reais de clientes reais. Veja o que as pessoas têm a dizer
            sobre trabalhar comigo
          </p>
          <div className="flex gap-4 mt-2 self-center md:self-start">
            {/* Botão Anterior */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-yellow-800 hover:scale-105 hover:shadow-md"
              aria-label="Depoimento anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Botão Próximo */}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-yellow-800 hover:scale-105 hover:shadow-md"
              aria-label="Próximo depoimento"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Coluna da Direita - Card com transição */}
        <div className="bg-bgcolor rounded-lg shadow-lg p-6 text-white-75 text-base font-inter md:text-lg">
          {depoimentos.map((dep, i) => (
            <p
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === index
                  ? "opacity-100 relative"
                  : "opacity-0 pointer-events-none"
              } italic flex flex-col justify-center`}
            >
              {dep.texto}
              <span className="mt-4 text-sm font-semibold text-right text-white">
                — {dep.autor}
              </span>
            </p>
          ))}
        </div>

        {/* <div className="bg-bgcolor rounded-lg shadow-lg p-6 text-white text-base font-inter md:text-lg">
          <p className="italic">
            “O Dr. Rafael foi essencial no meu processo trabalhista. Sempre
            atencioso, explicou cada etapa com clareza e conquistou um ótimo
            resultado para mim.”
          </p>
          <div className="mt-4 text-sm font-semibold text-right">
            — Ana Oliveira
          </div>
        </div> */}
      </div>
    </section>
  );
}
