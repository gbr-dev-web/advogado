export default function Valores() {
  return (
    <>
      <section id="especialidades" class="bg-bgcolor relative">
        {/* Container com espaçamento interno e centralização horizontal */}
        <div class="container px-6 py-14 mx-auto">
          {/* Título principal da seção */}
          <h2 class="text-2xl font-prata text-center capitalize lg:text-3xl text-color-main">
            Especialidades
          </h2>
          {/* Grid de cards com responsividade: 1 coluna no mobile, 2 no md, 3 no xl */}
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-2 space-y-3 text-center">
              <span class="inline-block p-3 rounded-full text-color-main bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold capitalize text-color-main">
                Copy & paste components
              </h1>

              <p class="text-white-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
            </div>

            <div className="flex flex-col items-center p-2 space-y-3 text-center">
              <span class="inline-block p-3  rounded-full text-color-main bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold  capitalize text-color-main">
                Zero Configuration
              </h1>

              <p class="text-white-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
            </div>

            <div className="flex flex-col items-center p-2 space-y-3 text-center">
              <span class="inline-block p-3  rounded-full text-color-main bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold  capitalize text-color-main">
                Simple & clean designs
              </h1>

              <p class="text-white-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
