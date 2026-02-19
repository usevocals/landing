import { useState } from "react";
import { useTranslation } from "react-i18next";

/* 4 color blobs with 2 blur levels each */
const blobs = [
  { color: "rgb(138, 67, 225)", top: 207, left: 0 },
  { color: "rgb(213, 17, 253)", top: 363, left: 37 },
  { color: "rgb(239, 123, 22)", top: 0, left: 213 },
  { color: "rgb(255, 47, 47)", top: 80, left: 9 },
];

function BlobGroup({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="absolute" style={{ width: 378, height: 571, ...style }}>
      {/* Outer container with negative offset so blobs bleed outward */}
      <div className="absolute" style={{ width: 420, height: 571, left: -42, top: 0 }}>
        {blobs.map((b, i) => (
          <div key={`200-${i}`}>
            <div
              className="absolute"
              style={{
                width: 207, height: 207, borderRadius: "50%",
                backgroundColor: b.color,
                top: b.top, left: b.left,
                filter: "blur(200px)",
              }}
            />
            <div
              className="absolute"
              style={{
                width: 207, height: 207, borderRadius: "50%",
                backgroundColor: b.color,
                top: b.top, left: b.left,
                filter: "blur(100px)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="section-px relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ paddingTop: 50, paddingBottom: 100, minHeight: 660, height: "100vh" }}
    >
      {/* Background with colored blurred blobs */}
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: "#f4f2f1" }}>
        {/* Left blob group */}
        <BlobGroup style={{ left: 0, top: 0 }} />
        {/* Right blob group (mirrored) */}
        <BlobGroup style={{ right: 0, top: 0, transform: "scale(-1, -1)" }} />

        {/* Top fade */}
        <div
          className="absolute inset-x-0 top-0"
          style={{
            height: 415,
            background: "linear-gradient(rgb(242,240,238) 0%, rgba(242,240,238,0) 100%)",
            zIndex: 2,
          }}
        />

        {/* Vertical stripe lines */}
        <div
          className="absolute flex"
          style={{ inset: 0, zIndex: 1 }}
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: "100%",
                background: "linear-gradient(270deg, rgba(242,240,238,0.2) 0%, rgba(242,240,238,0) 100%)",
              }}
            />
          ))}
        </div>

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "100%",
            background: "linear-gradient(rgba(242,240,238,0) 0%, rgb(242,240,238) 100%)",
            zIndex: 2,
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0"
          style={{ mixBlendMode: "overlay", opacity: 0.75, zIndex: 3 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/hero-gradient.png)",
              backgroundSize: "128px",
              backgroundRepeat: "repeat",
            }}
          />
        </div>
      </div>

      <div className="animate-fade-in-up flex flex-col items-center" style={{ gap: 40, padding: "45px 0" }}>
        {/* Content area */}
        <div className="flex flex-col items-center" style={{ gap: 14 }}>
          {/* Badge */}
          <div
            className="flex items-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: 100,
              padding: "6px 12px",
              gap: 4,
              height: 37.5,
            }}
          >
            <span className="text-gradient" style={{ fontSize: 17, fontWeight: 500 }}>
              +100.000
            </span>
            <span style={{ fontSize: 17, fontWeight: 500, color: "#000" }}>
              {t("hero.badge")}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-heading"
            style={{
              fontSize: "clamp(36px, 9vw, 64px)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#111",
              textAlign: "center",
              maxWidth: 847,
            }}
          >
            {t("hero.h1_line1")}
            <br />
            {t("hero.h1_line2")}
          </h1>
        </div>

        {/* Subtitle + Form area */}
        <div className="flex flex-col items-center w-full" style={{ gap: 20, maxWidth: 800 }}>
          <p
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#3d3d3d",
              lineHeight: "27px",
            }}
          >
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col items-center" style={{ gap: 16 }}>
            <form
              className="flex flex-col items-center"
              style={{ gap: 16 }}
              onSubmit={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(187,187,187,0.15)",
                  borderRadius: 10,
                  width: 240,
                  height: 40,
                  position: "relative",
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("hero.email_placeholder")}
                  className="w-full h-full bg-transparent outline-none text-center"
                  style={{ fontSize: 14, padding: 12, color: "#999" }}
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#333",
                  borderRadius: 10,
                  width: 240,
                  height: 40,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                {t("hero.cta")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
