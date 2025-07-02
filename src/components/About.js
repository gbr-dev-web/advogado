import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section>
        {/* Container centralizado com largura máxima e padding responsivo */}
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Grid com 1 coluna no mobile e 2 colunas a partir de md */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            {/* Coluna da direita: imagem ilustrativa */}
            <div>
              <Image
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=1200&auto=format&fit=crop"
                alt="Woman sitting with laptop and coffee"
                width={600}
                height={400}
                className="rounded object-cover w-full h-auto"
              />
            </div>

            {/* Limita a largura do conteúdo (melhor leitura em telas grandes) */}
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold font-serif text-black sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              {/* Parágrafo com margem superior e cor de texto suave */}
              <p className="mt-4 text-gray-900 text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                doloremque saepe architecto maiores repudiandae amet perferendis
                repellendus, reprehenderit voluptas sequi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
