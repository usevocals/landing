import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-[20px] left-0 right-0 z-50 flex justify-center px-6">
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
        <a href="#hero">
          <img src="/images/logo.png" alt="Vocals" className="w-[120px]" />
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
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
            Contact
          </a>
          <div
            className="flex items-center"
            style={{ backgroundColor: "#eee", borderRadius: 12, padding: 7, height: 35 }}
          >
            <select
              defaultValue="en"
              className="bg-transparent outline-none cursor-pointer"
              style={{ fontSize: 12, border: "none", color: "#111" }}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}
