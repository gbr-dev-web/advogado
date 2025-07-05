import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
// Se o alias @ estiver configurado

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
    { label: "Sobre", href: "#sobre" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contatos", href: "#contatos" },
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
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-bgcolor/30"></div>
      )}
      {/* altere a fonte de todos os elementos pelo header */}
      {/* para tornalo com fundo transparente basta remover o bg, shadow e relative e adicinar: absolute top-0 left-0 */}
      {/* <header className="absolute top-0 left-0 w-full z-40 bg-bgcolor shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]"> */}
      <header className="absolute top-0 font-inter backdrop-blur-xl bg-black/20 left-0 w-full z-100 ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex h-16 items-center justify-between">
            {/* LOGO & title */}
            <div className="w-30 max-w-[180px] h-auto">
              <Image
                src="/assets/logo-bg.png"
                alt="Logo"
                layout="responsive"
                width={0}
                height={0}
                objectFit="contain"
              />
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
            <nav className="relative z-20 md:hidden">
              <ul className="space-y-2">
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
                        className="text-lg block rounded px-4 py-4 text-color-main hover:bg-hover"
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
