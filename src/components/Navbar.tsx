import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: 16, height: 16, fill: "#111" }}>
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H175.8c-1.41-28.46-10.27-55.47-25.12-77A88.2,88.2,0,0,1,215.63,120ZM128,215.89c-18.73-20.27-30.09-49-31.77-79.89h63.54C158.09,166.87,146.73,195.62,128,215.89ZM96.23,120c1.68-30.87,13-59.62,31.77-79.89,18.73,20.27,30.09,49,31.77,79.89Zm9.09-77C90.47,64.53,81.61,91.54,80.2,120H40.37A88.2,88.2,0,0,1,105.32,43ZM40.37,136H80.2c1.41,28.46,10.27,55.47,25.12,77A88.2,88.2,0,0,1,40.37,136Zm110.31,77c14.85-21.56,23.71-48.57,25.12-77h39.83A88.2,88.2,0,0,1,150.68,213Z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const { currentLang, switchLanguage } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-[20px] left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <nav
        className="flex items-center justify-between w-full transition-all duration-300"
        style={{
          maxWidth: 1080,
          width: "80%",
          height: 72,
          padding: "10px 20px",
          borderRadius: 12,
          backgroundColor: scrolled ? "#fff" : "transparent",
          boxShadow: scrolled ? "0 4px 8px rgba(0,0,0,0.05)" : "none",
        }}
      >
        <a href={`/${currentLang}#hero`}>
          <img src="/images/logo.png" alt="Vocals" className="w-[120px]" />
        </a>

        <div className="flex items-center gap-3">
          <a
            href={`/${currentLang}#contact`}
            className="flex items-center justify-center hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "#111",
              borderRadius: 8,
              padding: "12px 14px",
              height: 39,
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {t("nav.contact")}
          </a>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                className="flex items-center justify-center hover:opacity-80 transition-opacity outline-none"
                style={{
                  backgroundColor: "#eee",
                  borderRadius: 12,
                  width: 35,
                  height: 35,
                }}
                aria-label={currentLang === "en" ? t("nav.lang_en") : t("nav.lang_es")}
              >
                <GlobeIcon />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={8}
                align="end"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: 4,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  minWidth: 120,
                  zIndex: 100,
                }}
              >
                <DropdownMenu.Item
                  onSelect={() => switchLanguage("en")}
                  className="outline-none cursor-pointer"
                  style={{
                    padding: "8px 12px",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: currentLang === "en" ? 600 : 400,
                    color: "#111",
                    backgroundColor: currentLang === "en" ? "#f4f2f1" : "transparent",
                  }}
                >
                  {t("nav.lang_en")}
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={() => switchLanguage("es")}
                  className="outline-none cursor-pointer"
                  style={{
                    padding: "8px 12px",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: currentLang === "es" ? 600 : 400,
                    color: "#111",
                    backgroundColor: currentLang === "es" ? "#f4f2f1" : "transparent",
                  }}
                >
                  {t("nav.lang_es")}
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </nav>
    </div>
  );
}
