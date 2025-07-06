export default function Especialidades() {
  return (
    <>
      <section id="especialidades" class="bg-bgcolor relative">
        {/* Container com espaçamento interno e centralização horizontal */}
        <div class="container px-8 py-14 mx-auto">
          {/* Título principal da seção */}
          <h2 class="text-2xl font-prata text-center capitalize lg:text-3xl text-color-main">
            Especialidades
          </h2>
          {/* Grid de cards com responsividade: 1 coluna no mobile, 2 no md, 3 no xl */}
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 font-inter">
            <div className="flex flex-col items-center p-2 sm:p-4 space-y-3 text-center">
              <span class="inline-block p-3 rounded-full text-color-main bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.75 2.75V4.5h1.975c.351 0 .694.106.984.303l1.697 1.154q.063.042.14.043h4.102a.75.75 0 0 1 0 1.5H20.07l3.366 7.68a.75.75 0 0 1-.23.896q-.15.111-.31.206a6 6 0 0 1-.79.399a7.35 7.35 0 0 1-2.856.569a7.3 7.3 0 0 1-2.855-.568a6 6 0 0 1-.79-.4a3 3 0 0 1-.307-.202l-.005-.004a.75.75 0 0 1-.23-.896l3.368-7.68h-.886c-.351 0-.694-.106-.984-.303l-1.697-1.154a.25.25 0 0 0-.14-.043H12.75v14.5h4.487a.75.75 0 0 1 0 1.5H6.763a.75.75 0 0 1 0-1.5h4.487V6H9.275a.25.25 0 0 0-.14.043L7.439 7.197c-.29.197-.633.303-.984.303h-.886l3.368 7.68a.75.75 0 0 1-.209.878c-.08.065-.16.126-.31.223a6 6 0 0 1-.792.433a6.9 6.9 0 0 1-2.876.62a6.9 6.9 0 0 1-2.876-.62a6 6 0 0 1-.792-.433a4 4 0 0 1-.309-.221a.76.76 0 0 1-.21-.88L3.93 7.5H2.353a.75.75 0 0 1 0-1.5h4.102q.076 0 .141-.043l1.695-1.154c.29-.198.634-.303.985-.303h1.974V2.75a.75.75 0 0 1 1.5 0M2.193 15.198a5.4 5.4 0 0 0 2.557.635a5.4 5.4 0 0 0 2.557-.635L4.75 9.368Zm14.51-.024q.123.06.275.126c.53.223 1.305.45 2.272.45a5.85 5.85 0 0 0 2.547-.576L19.25 9.367Z"
                  ></path>
                </svg>
              </span>

              <h3 class="text-xl font-semibold capitalize text-color-main">
                Revisão de Verbas Rescisórias
              </h3>

              <p class="text-white-75">
                Análise completa do seu desligamento para verificar se todos os
                valores pagos pela empresa estão corretos. Evite prejuízos ao
                sair do emprego.
              </p>
            </div>

            <div className="flex flex-col items-center p-2 md:p-4 space-y-3 text-center">
              <span class="inline-block p-3 rounded-full text-color-main bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="currentColor"
                    d="M8 8.2h16v1.6H8zm0 8h8.086v1.6H8zm15.378-4H8v1.6h13.779zM12.794 29.072a2.47 2.47 0 0 0 2.194.824h7.804a.7.7 0 0 0 0-1.4h-7.804c-.911-.016-.749-.807-.621-1.052a4 4 0 0 0 .387-.915a1.18 1.18 0 0 0-.616-1.322a1.9 1.9 0 0 0-2.24.517c-.344.355-.822.898-1.28 1.426c.283-1.109.65-2.532 1.01-3.92a1.315 1.315 0 0 0-.755-1.626a1.425 1.425 0 0 0-1.775.793c-.432.831-3.852 6.562-3.886 6.62a.7.7 0 1 0 1.202.718c.128-.215 2.858-4.788 3.719-6.315c-.648 2.5-1.362 5.282-1.404 5.532a.87.87 0 0 0 .407.969a.92.92 0 0 0 1.106-.224c.126-.114.362-.385.957-1.076a62 62 0 0 1 1.703-1.921c.218-.23.35-.128.222.098a2.29 2.29 0 0 0-.33 2.274"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M28 21.695V32H4V4h24v4.993l1.33-1.33a4.3 4.3 0 0 1 .67-.54V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V21.427a2.9 2.9 0 0 1-2 .268"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m34.128 11.861l-.523-.523a1.9 1.9 0 0 0-.11-2.423a1.956 1.956 0 0 0-2.75.162L18.22 21.6l-.837 3.142a.234.234 0 0 0 .296.294l3.131-.847l11.692-11.692l.494.495a.37.37 0 0 1 0 .525l-4.917 4.917a.8.8 0 0 0 1.132 1.131l4.917-4.917a1.97 1.97 0 0 0 0-2.788"
                  ></path>
                </svg>
              </span>

              <h3 class="text-xl font-semibold  capitalize text-color-main">
                Acordos Extrajudiciais
              </h3>

              <p class="text-white-75">
                Negociações formais entre empregado e empregador para resolver
                conflitos de forma rápida, segura e reconhecida pela Justiça do
                Trabalho.
              </p>
            </div>

            <div className="flex flex-col items-center p-2 md:p-4 space-y-3 text-center">
              <span class="inline-block p-3 rounded-full text-color-main bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8 20h8v-3q0-1.65-1.175-2.825T12 13t-2.825 1.175T8 17zm4-9q1.65 0 2.825-1.175T16 7V4H8v3q0 1.65 1.175 2.825T12 11M4 22v-2h2v-3q0-1.525.713-2.863T8.7 12q-1.275-.8-1.987-2.137T6 7V4H4V2h16v2h-2v3q0 1.525-.712 2.863T15.3 12q1.275.8 1.988 2.138T18 17v3h2v2zm8-18"
                  ></path>
                </svg>
              </span>

              <h3 class="text-xl font-semibold  capitalize text-color-main">
                Horas Extras e Banco de Horas
              </h3>

              <p class="text-white-75">
                Avaliação de registros de ponto e jornada para identificar
                abusos ou pagamentos incorretos. Exija seus direitos de forma
                legal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
