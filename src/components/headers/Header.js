import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const dropdownRefs = useRef({});

  const menuItems = [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    {
      label: "Services",
      dropdown: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "SEO", href: "/services/seo" },
        { label: "Design", href: "/services/design" },
      ],
    },
    { label: "Projects", href: "#" },
    { label: "Blog", href: "#" },
  ];

  // Fecha dropdown ao clicar fora (se estiver aberto por clique)
  useEffect(() => {
    function handleClickOutside(event) {
      if (openDropdown) {
        const ref = dropdownRefs.current[openDropdown];
        if (ref && !ref.contains(event.target)) {
          setOpenDropdown(null);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {menuOpen && (
        <div className="fixed inset-0 z-10 backdrop-blur-md bg-bgcolor/30"></div>
      )}
      {/* altere a fonte de todos os elementos pelo header */}
      {/* para tornalo com fundo transparente basta remover o bg, shadow e relative e adicinar: absolute top-0 left-0 */}
      <header className="absolute top-0 left-0 w-full z-40 bg-bgcolor shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]">
      {/* <header className="absolute top-0 left-0 w-full z-40 ">  */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex h-16 items-center justify-between">
            {/* LOGO & title */}
            <div className="flex-1 flex items-center">
              {/* qualquer coisa é só tirar o hidden de um e apagar o outro */}
              <a className="hidden sm:block text-teal-300" href="#">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Novo container com título e descrição */}
              <div className="ml-3 flex flex-col">
                <h1 className="text-base lg:text-lg font-semibold text-color-main">
                  Meu Título Aqui
                </h1>
                <p className="text-xs lg:text-sm text-white-75">
                  Pequena descrição abaixo do título.
                </p>
              </div>
            </div>

            {/* Navigation DESKTOP */}
            <nav className="hidden md:block mr-4">
              <ul className="flex items-center text-lg gap-4">
                {menuItems.map((item) => (
                  <li key={item.label} className="relative">
                    {item.dropdown ? (
                      <div
                        ref={(el) => (dropdownRefs.current[item.label] = el)}
                        onMouseEnter={() => setHoveredDropdown(item.label)}
                        onMouseLeave={() => setHoveredDropdown(null)}
                        className="relative"
                      >
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.label ? null : item.label
                            )
                          }
                          className="flex items-center gap-1 transition px-4 py-4 text-color-main hover-text"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              openDropdown === item.label ||
                              hoveredDropdown === item.label
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        </button>

                        {(openDropdown === item.label ||
                          hoveredDropdown === item.label) && (
                          <div className="absolute z-30 w-56 rounded-md border shadow-lg border-gray-800 bg-bgcolor">
                            <div className="p-2">
                              {item.dropdown.map((sub, idx) => (
                                <a
                                  key={idx}
                                  href={sub.href}
                                  className="block rounded-lg px-4 py-2 text-base text-white-75 hover:bg-hover hover:text-color-main"
                                >
                                  {sub.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className=" transition px-4 py-4 text-color-main hover-text"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* USUÁRIO (SOMENTE DESKTOP)(OPCIONAL) */}
            <div className="relative hidden md:block" ref={menuRef}>
              <button
                ref={buttonRef}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 overflow-hidden rounded-full border shadow-inner border-gray-600 cursor-pointer"
              >
                <span className="sr-only">Toggle dashboard menu</span>
                {/* pode usar um svg ao inves disso se quiser, isso é só um exemplo */}
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </button>

              {isOpen && (
                <div
                  className="absolute end-0 z-10 mt-0.5 w-56 rounded-md border shadow-lg border-gray-800 bg-bgcolor"
                  role="menu"
                >
                  <div className="p-2">
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-base text-white-75 hover:bg-hover hover:text-color-main"
                      role="menuitem"
                    >
                      My profile
                    </a>

                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-base text-white-75 hover:bg-hover hover:text-color-main"
                      role="menuitem"
                    >
                      My data
                    </a>

                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-base text-white-75 hover:bg-hover hover:text-color-main"
                      role="menuitem"
                    >
                      Team settings
                    </a>

                    <form method="POST" action="#">
                      <button
                        type="submit"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-red-500 hover:bg-red-600/10"
                        role="menuitem"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                          />
                        </svg>
                        Logout
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* BOTÃO MENU MOBILE */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded p-2 transition text-color-main hover-text"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  // Ícone X
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Ícone hambúrguer
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* MENU MOBILE VISÍVEL QUANDO ATIVO */}
          {menuOpen && (
            <nav className="relative z-20 md:hidden mt-2 border-t border-gray-700 bg-bgcolor backdrop-blur-md">
              y
              <ul className="space-y-2 text-sm">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    {/* Item com dropdown */}
                    {item.dropdown ? (
                      <div>
                        <span className="flex items-center justify-between px-4 py-3 text-lg font-medium text-color-main">
                          {item.label}
                          <ChevronDown className="w-4 h-4" />
                        </span>
                        <ul className="ml-6 mt-1 space-y-1">
                          {item.dropdown.map((sub, idx) => (
                            <li key={idx}>
                              <a
                                href={sub.href}
                                className="block rounded px-4 py-2 text-white-75 hover:bg-hover"
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="text-lg block rounded px-4 py-3 text-color-main hover:bg-hover"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
