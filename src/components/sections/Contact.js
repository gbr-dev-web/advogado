export default function Contact() {
  return (
    <>
      <section
        id="contatos"
        className="min-h-screen bg-cover"
        style={{
          backgroundImage: "url('/assets/contact.jpg')",
        }}
      >
        <div class="flex flex-col min-h-screen bg-black/80">
          <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div class="flex-1 lg:flex lg:items-center lg:-mx-6 font-inter">
              {/* coluna um */}
              <div class="text-white lg:w-1/2 lg:mx-6">
                <h2 class="text-2xl md:text-3xl font-prata">
                  Onde me encontrar
                </h2>

                <p class="max-w-xl mt-2 text-white/75">
                  Atendimento presencial em São Paulo e online para todo o
                  Brasil
                </p>

                <h3 class="text-white-75 font-semibold mt-4">Contatos</h3>

                {/* contacts */}
                <div class="space-y-2 mt-2">
                  <p class="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-2 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span class="mx-2 text-white truncate w-72">
                      (257) 563-7401
                    </span>
                  </p>

                  <p class="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-2 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span class="mx-2 text-white truncate w-72">
                      acb@example.com
                    </span>
                  </p>
                </div>

                {/* follow us */}
                <div class="mt-4">
                  <h3 class="text-gray-300 ">Me Siga</h3>

                  <div class="flex mt-2 -mx-1.5 ">
                    <a
                      class="mx-1.5 text-white transition-colors duration-300 transform hover:text-primary"
                      href="#"
                    >
                      <svg
                        class="w-8 h-8 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                      </svg>
                    </a>

                    <a
                      class="mx-1.5 text-white transition-colors duration-300 transform hover:text-primary"
                      href="#"
                    >
                      <svg
                        class="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>

                    <a
                      class="mx-1.5 text-white transition-colors duration-300 transform hover:text-primary"
                      href="#"
                    >
                      <svg
                        class="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>

                    <a
                      class="mx-1.5 text-white transition-colors duration-300 transform hover:text-primary"
                      href="#"
                    >
                      <svg
                        class="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex gap-4 sm:mt-6">
                  <a
                    href="https://wa.me/seunumerodetelefone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto py-3 px-2.5 md:p-3.5 hover-btn bg-primary rounded-[6px] md:rounded-[10px] flex justify-center items-center gap-2.5 transition-all duration-200 shadow-[4px_4px_0px_rgba(0,0,0,0.25)]"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 relative ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 258"
                      >
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
                    <p className="justify-start text-white text-base md:text-lg font-bold font-inter">
                      Faça uma Consulta
                    </p>
                  </a>
                </div>
              </div>
              {/* coluna dois */}
              <div class="lg:w-1/2 mt-6 lg:mt-0 lg:mx-auto items-center">
                <div class="w-full px-4 py-6 sm:px-8 sm:py-10 mx-auto shadow-2xl rounded-xl bg-bgcolor lg:max-w-xl">
                  <h3 class="text-2xl font-semibold font-inter text-white ">
                    Fale Comigo
                  </h3>

                  <form class="mt-4">
                    <div class="flex-1">
                      <label class="block mb-2 text-base text-white-75">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        class="block w-full px-5 py-3 mt-2 border rounded-md bg-bgcolor text-white border-gray-600 focus:ring-gray-500 focus:ring-1"
                      />
                    </div>

                    <div class="flex-1 mt-6">
                      <label class="block mb-2 text-base text-white-75">
                        Endereço de Email
                      </label>
                      <input
                        type="email"
                        placeholder="johndoe@example.com"
                        class="block w-full px-5 py-3 mt-2 border rounded-md bg-bgcolor text-white border-gray-600 focus:ring-gray-500 focus:ring-1"
                      />
                    </div>

                    <div class="w-full mt-6">
                      <label class="block mb-2 text-base text-white-75">
                        Mensagem
                      </label>
                      <textarea
                        class="block w-full h-32 px-5 py-3 mt-2 border rounded-md md:h-48 bg-bgcolor text-white border-gray-600 focus:ring-gray-500 focus:ring-1"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <button class="w-full px-6 py-3 mt-6 text-base font-semibold text-white transition-all duration-200 shadow-[4px_4px_0px_rgba(0,0,0,0.25)] bg-primary rounded-md hover-btn">
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
