import Image from "next/image";
export default function Hero() {
  return (
    <>
      {/* substitua o min-h-[calc(100vh-80px)] por h-screeen quando a navbar for transparente*/}
      <section
        className="relative min-h-[calc(100vh-80px)] grid place-items-center bg-black/80 text-white"
        // OTIMIZE MANUAMLMENTE A IMAGEM DE FUNDO
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay opcional para reforçar a escuridão */}
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 mx-auto w-screen mt-2 md:mt-0 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-4 sm:px-6 lg:px-8">
          {/* Coluna da esquerda: texto */}
          <div className="max-w-prose text-left">
            <h1 className="max-[500px]:text-3xl text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              Understand user flow and
              <strong className="text-indigo-600"> increase </strong>
              conversions
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Get Started
              </a>
              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Coluna da direita: imagem */}
          <div className="mx-auto max-w-md text-center text-gray-900 dark:text-white">
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
