import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section
        className="relative min-h-screen grid place-items-center bg-bgcolor" // header solido
      >
        {/* background */}
        <div className="absolute left-0 top-0 h-full w-screen md:w-[50vw] opacity-20 md:opacity-30 z-0 pointer-events-none">
          <svg
            viewBox="0 0 48 64"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full text-[#926129]"
            fill="currentColor"
          >
            <path d="M48,28 L48,24 L36,12 L24,24 L12,12 L0,24 L0,28 L0,28 L4,32 L0,36 L0,40 L12,52 L24,40 L36,52 L48,40 L48,36 L44,32 L48,28 L48,28 Z M8,32 L2,26 L12,16 L22,26 L16,32 L22,38 L12,48 L2,38 L8,32 L8,32 L8,32 L8,32 L8,32 L8,32 Z M20,32 L24,28 L28,32 L24,36 L20,32 L20,32 L20,32 L20,32 L20,32 L20,32 Z M32,32 L26,26 L36,16 L46,26 L40,32 L46,38 L36,48 L26,38 L32,32 L32,32 L32,32 L32,32 L32,32 L32,32 Z M0,16 L10,6 L4,0 L8,0 L12,4 L16,0 L20,0 L14,6 L24,16 L34,6 L28,0 L32,0 L36,4 L40,0 L44,0 L38,6 L48,16 L48,20 L36,8 L24,20 L12,8 L0,20 L0,16 L0,16 L0,16 L0,16 L0,16 L0,16 Z M0,48 L10,58 L4,64 L8,64 L12,60 L16,64 L20,64 L14,58 L24,48 L34,58 L28,64 L32,64 L36,60 L40,64 L44,64 L38,58 L48,48 L48,44 L36,56 L24,44 L12,56 L0,44 L0,48 L0,48 L0,48 L0,48 L0,48 L0,48 Z" />
          </svg>
        </div>

        {/* Overlay para reforçar a escuridão */}
        <div className="absolute inset-0 bg-black/25 md:bg-black/75"></div>

        <div className="relative z-10 mx-auto md:h-full w-screen pt-20 pb-10 md:pt-0 md:pb-0 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-4 px-4 sm:px-6 lg:px-8">
          {/* Coluna da esquerda: texto */}
          <div className="max-w-prose text-left">
            <h1 className="w-fit font-prata text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#926129] via-[#F0E495] to-[#926129]">
              Dr. Rafael Menezes
            </h1>

            <p className="mt-4 text-base text-white-75 font-inter sm:text-lg/relaxed ">
              Defesa dos seus direitos trabalhistas com atendimento humanizado,
              direto ao ponto e sem complicações. Agende uma consultoria e
              receba orientação especializada para sua situação.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                href="https://wa.me/seunumerodetelefone"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto p-3.5 hover-btn bg-gray-500 rounded-[10px] flex justify-center items-center gap-2.5  transition-all duration-200 shadow-[4px_4px_0px_rgba(0,0,0,0.25)]"
              >
                <p className="justify-start text-white text-lg font-semibold font-inter">
                  Consulta Gratuita
                </p>
                <div className="w-8 h-8 relative ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 258">
                    <defs>
                      <linearGradient
                        id="logosWhatsappIcon0"
                        x1="50%"
                        x2="50%"
                        y1="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#1faf38"></stop>
                        <stop offset="100%" stopColor="#60d669"></stop>
                      </linearGradient>
                      <linearGradient
                        id="logosWhatsappIcon1"
                        x1="50%"
                        x2="50%"
                        y1="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#f9f9f9"></stop>
                        <stop offset="100%" stopColor="#fff"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#logosWhatsappIcon0)"
                      d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                    ></path>
                    <path
                      fill="url(#logosWhatsappIcon1)"
                      d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Coluna da direita: imagem, logo, vazio... */}
          <div className="relative z-10 w-full rounded-md h-[300px] md:h-full md:w-[50vw] max-w-none">
            <Image
              src="/assets/lawyer.jpg"
              alt="Avatar"
              fill
              className="object-cover object-[50%_28%] sm:object-[50%_20%] md:object-[50%_20%]"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
