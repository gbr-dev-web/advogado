import Image from "next/image";

export default function CTA() {
  return (
    <>
      <section
        id="ebook"
        className="bg-secondary lg:py-12 lg:flex lg:justify-center"
      >
        <div className="overflow-hidden font-inter bg-bgcolor lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2 h-64 lg:h-full relative">
            <Image
              src="/assets/ebook.jpg"
              alt="Ebook"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-xl font-semibold text-white md:text-3xl">
              5 Direitos Trabalhistas Que a Maioria dos Empregados Desconhece
            </h2>

            <p className="mt-4 text-white-75">
              Muitos trabalhadores deixam de receber valores importantes por
              falta de informação. Neste eBook prático e direto ao ponto, você
              vai descobrir os 5 principais direitos que empresas frequentemente
              ignoram — e o que fazer se isso acontecer com você.
            </p>

            <a
              href="/assets/docs/ebook.pdf"
              download
              className="inline-block px-6 py-2 text-sm font-semibold font-inter max-[400px]:w-full text-white bg-primary rounded-lg hover-btn transition-all duration-200 shadow-[4px_4px_0px_rgba(0,0,0,0.25)] mt-6 text-center"
            >
              Baixar Ebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
