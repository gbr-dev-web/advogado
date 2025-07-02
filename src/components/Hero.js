import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section
        className="relative min-h-screen grid place-items-center bg-bgcolor" // header solido
        // OTIMIZE MANUAMLMENTE A IMAGEM DE FUNDO
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay para reforçar a escuridão */}
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 mx-auto w-screen mt-2 md:mt-0 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-4 px-4 sm:px-6 lg:px-8">
          {/* Coluna da esquerda: texto */}
          <div className="max-w-prose text-left">
            <h1 className="max-[500px]:text-3xl text-4xl font-bold font-serif text-color-main sm:text-5xl ">
              Understand user flow and
              <strong className="text-primary"> increase </strong>
              conversions
            </h1>

            <p className="mt-4 text-base text-white-75 sm:text-lg/relaxed ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-primary bg-primary px-5 py-3 font-medium text-color-main shadow-sm transition-colors hover-btn"
                href="#"
              >
                Get Started
              </a>
              <a
                className="inline-block rounded border px-5 py-3 font-medium shadow-sm transition-colors border-primary text-white-75 hover:bg-primary hover:text-color-main"
                href="#"
              > 
                Learn More
              </a>
            </div>
          </div>

          {/* Coluna da direita: imagem, logo, vazio... */}
          <div className="mx-auto max-w-md">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop"
              alt="Avatar"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
