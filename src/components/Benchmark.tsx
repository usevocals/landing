import { useTranslation } from "react-i18next";

/* Phosphor duotone mask-sad icon used for "Other Solutions" items */
function MaskIcon() {
  return (
    <div style={{ width: 27, height: 27, flexShrink: 0, marginTop: 0 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        style={{ width: 20, height: 20, fill: "#111", display: "block", margin: "3.5px" }}
      >
        <g>
          <path
            d="M216,48v55.77C216,174.6,176.6,232,128,232S40,174.6,40,103.79V48a8,8,0,0,1,10.89-7.47C66,46.41,95.11,55.71,128,55.71s62-9.3,77.11-15.16A8,8,0,0,1,216,48Z"
            opacity="0.2"
          />
          <path d="M158.66,188.43a8,8,0,0,1-11.09,2.23C141.07,186.34,136,184,128,184s-13.07,2.34-19.57,6.66a8,8,0,0,1-8.86-13.32C108,171.73,116.06,168,128,168s20,3.73,28.43,9.34A8,8,0,0,1,158.66,188.43ZM189.34,114a8,8,0,0,0-11.3.62c-2.68,3-8.85,5.34-14,5.34s-11.36-2.35-14-5.34A8,8,0,0,0,138,125.33c5.71,6.38,16.14,10.67,26,10.67s20.25-4.29,26-10.67A8,8,0,0,0,189.34,114ZM224,48v55.77c0,35.84-9.65,69.65-27.18,95.18-18.16,26.46-42.6,41-68.82,41s-50.66-14.57-68.82-41C41.65,173.44,32,139.63,32,103.79V48A16,16,0,0,1,53.79,33.09C67.84,38.55,96.18,47.71,128,47.71s60.15-9.16,74.21-14.62A16,16,0,0,1,224,48Zm-16,0v0c-15.1,5.89-45.57,15.73-80,15.73S63.1,53.87,48,48v55.79c0,32.64,8.66,63.23,24.37,86.13C87.46,211.9,107.21,224,128,224s40.54-12.1,55.63-34.08C199.34,167,208,136.43,208,103.79Zm-90,77.31A8,8,0,0,0,106,114.66c-2.68,3-8.85,5.34-14,5.34s-11.36-2.35-14-5.34A8,8,0,0,0,66,125.33C71.75,131.71,82.18,136,92,136S112.25,131.71,118,125.33Z" />
        </g>
      </svg>
    </div>
  );
}

/* Gradient-bordered dark check icon used for "Vocals" items */
function GradientCheckIcon() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: 27,
        height: 27,
        borderRadius: 8,
        flexShrink: 0,
        marginTop: 0,
        boxShadow: "0 6px 12px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          width: 27,
          height: 27,
          borderRadius: 9,
          padding: 1,
          background:
            "linear-gradient(180deg, #ff2f2f 0%, #ef7b16 35.88%, #8a43e1 69.92%, #d511fd 100%)",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: 25,
            height: 25,
            borderRadius: 8,
            background: "linear-gradient(180deg, #4c4c4c 0%, #111 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            style={{ width: 13, height: 13, fill: "#fff" }}
          >
            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Benchmark() {
  const { t } = useTranslation();

  const otherSolutions = [
    t("benchmark.other1"),
    t("benchmark.other2"),
    t("benchmark.other3"),
    t("benchmark.other4"),
    t("benchmark.other5"),
    t("benchmark.other6"),
    t("benchmark.other7"),
  ];

  const vocalsSolutions = [
    t("benchmark.vocals1"),
    t("benchmark.vocals2"),
    t("benchmark.vocals3"),
    t("benchmark.vocals4"),
    t("benchmark.vocals5"),
    t("benchmark.vocals6"),
    t("benchmark.vocals7"),
    t("benchmark.vocals8"),
  ];

  return (
    <section className="section-px flex justify-center" style={{ paddingTop: 70, paddingBottom: 70 }}>
      <div
        className="flex flex-col items-center"
        style={{ maxWidth: 1000, width: "100%", gap: 80 }}
      >
        {/* Header */}
        <div className="flex flex-col items-center" style={{ gap: 14 }}>
          <p style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>
            {t("benchmark.badge")}
          </p>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(32px, 8vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#111",
              textAlign: "center",
            }}
          >
            {t("benchmark.title")}
          </h2>
          <p
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#3d3d3d",
              lineHeight: "27px",
              textAlign: "center",
              maxWidth: 700,
            }}
          >
            {t("benchmark.subtitle")}
          </p>
        </div>

        {/* Cards row */}
        <div className="relative flex flex-col md:flex-row gap-10 md:gap-[80px]">
          {/* Other solutions card */}
          <div style={{ flex: 1, borderRadius: 20, backgroundColor: "#e8e4e2", padding: 2 }}>
            <div style={{ padding: "30px 24px" }}>
              <p style={{ fontSize: 24, fontWeight: 700, color: "#1e1e1e", textAlign: "center" }}>
                {t("benchmark.other_header")}
              </p>
            </div>
            <div className="flex flex-col" style={{ padding: "30px", gap: 20 }}>
              {otherSolutions.map((item, i) => (
                <div key={i} className="flex items-start" style={{ gap: 12 }}>
                  <MaskIcon />
                  <span style={{ fontSize: 18, fontWeight: 500, color: "#4c4c4c", lineHeight: "27px" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* V/S badge - centered between cards */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "#111",
              zIndex: 10,
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 500, color: "#fff" }}>V/S</span>
          </div>

          {/* Vocals card - gradient border */}
          <div
            style={{
              flex: 1,
              borderRadius: 20,
              padding: 2,
              background: "linear-gradient(180deg, rgb(255,47,47) 0%, rgb(239,123,22) 35.88%, rgb(138,67,225) 69.92%, rgb(213,17,253) 100%)",
            }}
          >
            <div
              className="flex flex-col"
              style={{
                backgroundColor: "#fff",
                borderRadius: 18,
                height: "100%",
              }}
            >
              {/* Top section - logo */}
              <div style={{ padding: "20px 24px" }}>
                <img src="/images/logo.png" alt="Vocals" style={{ height: 48, margin: "0 auto" }} />
              </div>
              {/* Bottom section - items */}
              <div
                className="flex flex-col"
                style={{ padding: "24px 30px", gap: 20 }}
              >
              {vocalsSolutions.map((item, i) => (
                <div key={i} className="flex items-start" style={{ gap: 12 }}>
                  <GradientCheckIcon />
                  <span style={{ fontSize: 18, fontWeight: 500, color: "#4c4c4c", lineHeight: "27px" }}>
                    {item}
                  </span>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className="flex items-center justify-center hover:opacity-90 transition-opacity"
          style={{
            backgroundColor: "#111",
            borderRadius: 8,
            padding: "12px 14px",
            fontSize: 14,
            fontWeight: 600,
            color: "#fff",
          }}
        >
          {t("benchmark.cta")}
        </a>
      </div>
    </section>
  );
}
