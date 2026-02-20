import { useTranslation } from "react-i18next";

const GRADIENT = "linear-gradient(180deg, #ff2f2f 0%, #ef7b16 35.88%, #8a43e1 69.92%, #d511fd 100%)";

function KeyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: 26, height: 26 }}>
      <g>
        <path
          d="M88,48A80,80,0,1,0,168,128,80.09,80.09,0,0,0,88,48Zm0,120a40,40,0,1,1,40-40A40,40,0,0,1,88,168Z"
          opacity="0.2"
          fill="currentColor"
        />
        <path
          d="M251.31,74.34l-32-32a8,8,0,0,0-11.31,0L184,66.34,169.66,52a16,16,0,0,0-22.63,0L144,55l-1.37-1.38a16,16,0,0,0-22.63,0l-8,8a16,16,0,0,0,0,22.63l1.37,1.37L88,111a56,56,0,1,0,11.31,11.31l25.38-25.38,1.37,1.37a16,16,0,0,0,22.63,0l8-8a16,16,0,0,0,0-22.63L155.31,66l3-3,14.35,14.34a8,8,0,0,0,11.31,0L208,53.66l21.37,21.37-21.06,21.06a8,8,0,0,0,11.32,11.31l26.68-26.69A8,8,0,0,0,251.31,74.34ZM87.8,192a40,40,0,1,1,0-80,40.07,40.07,0,0,1,40,40A40,40,0,0,1,87.8,192Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: 26, height: 26 }}>
      <g>
        <path
          d="M216,48V136c0,72-88,120-88,120S40,208,40,136V48l88-32Z"
          opacity="0.2"
          fill="currentColor"
        />
        <path
          d="M221.27,42.43A8,8,0,0,0,216,40L131.82,13.39a8,8,0,0,0-7.64,0L40,40a8,8,0,0,0-5.27,7.46C34.22,66.55,37,141.06,80.09,190.86c18.9,21.66,43.42,35.14,47.92,37.21a8,8,0,0,0,3.94 1,3.94,3.94,0,0,0,2-.53c.57-.26,48-22,70-72.92C221.12,199,224,141.06,222,47.46A8,8,0,0,0,221.27,42.43ZM128,212.05C111.55,202.83,48,160.16,48,48l80-29.09L208,48C208,160.53,144.4,202.84,128,212.05Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: 26, height: 26 }}>
      <g>
        <rect x="32" y="72" width="192" height="16" rx="8" opacity="0.2" fill="currentColor" />
        <rect x="32" y="168" width="192" height="16" rx="8" opacity="0.2" fill="currentColor" />
        <path
          d="M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16H137a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

interface FeatureCardProps {
  color: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function FeatureCard({ color, icon, title, desc }: FeatureCardProps) {
  return (
    <div
      className="flex flex-col"
      style={{
        flex: 1,
        padding: "24px",
        borderRadius: 18,
        backgroundColor: "#fff",
        border: "1.5px solid #ded8d3",
        gap: 16,
        minWidth: 200,
      }}
    >
      <div style={{ color }}>{icon}</div>
      <div className="flex flex-col" style={{ gap: 8 }}>
        <p style={{ fontSize: 18, fontWeight: 600, color: "#111", lineHeight: 1.3 }}>{title}</p>
        <p style={{ fontSize: 15.5, fontWeight: 500, color: "#4c4c4c", lineHeight: 1.6 }}>{desc}</p>
      </div>
    </div>
  );
}

export default function Orchestrator() {
  const { t } = useTranslation();

  return (
    <section
      className="section-px flex justify-center"
      style={{ paddingTop: 70, paddingBottom: 70, backgroundColor: "#f4f2f1" }}
    >
      <div style={{ maxWidth: 1240, width: "100%" }}>

        {/* Header */}
        <div className="flex flex-col" style={{ gap: 12, marginBottom: 48, alignItems: "center" }}>
          <p
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "#111",
              backgroundColor: "#fff",
              borderRadius: 100,
              padding: "6px 14px",
              width: "fit-content",
            }}
          >
            {t("orchestrator.badge")}
          </p>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#111",
              maxWidth: 930,
              width: "75%",
              textAlign: "center",
            }}
          >
            {t("orchestrator.title")}
          </h2>
          <p
            style={{
              fontSize: 17,
              fontWeight: 500,
              color: "#4c4c4c",
              lineHeight: "25.5px",
              maxWidth: 600,
              textAlign: "center",
            }}
          >
            {t("orchestrator.subtitle")}
          </p>
        </div>

        {/* Main content: big BYOK card + 3 feature cards */}
        <div className="flex flex-col" style={{ gap: 16 }}>

          {/* BYOK highlight card — full width */}
          <div
            style={{
              padding: 2,
              borderRadius: 22,
              background: GRADIENT,
            }}
          >
            <div
              className="flex flex-col md:flex-row items-start md:items-center"
              style={{
                backgroundColor: "#111",
                borderRadius: 20,
                padding: "36px 40px",
                gap: 32,
              }}
            >
              {/* Left: main message */}
              <div className="flex flex-col" style={{ flex: 1, gap: 14 }}>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#ef7b16",
                  }}
                >
                  {t("orchestrator.byok_eyebrow")}
                </p>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "clamp(22px, 4vw, 34px)",
                    fontWeight: 600,
                    color: "#fff",
                    lineHeight: 1.25,
                  }}
                >
                  {t("orchestrator.byok_title")}
                </h3>
                <p
                  style={{
                    fontSize: 15.5,
                    fontWeight: 500,
                    color: "#a0a0a0",
                    lineHeight: 1.65,
                    maxWidth: 480,
                  }}
                >
                  {t("orchestrator.byok_desc")}
                </p>
              </div>

              {/* Right: provider pills */}
              <div
                className="flex flex-wrap"
                style={{ gap: 10, maxWidth: 340, flexShrink: 0 }}
              >
                {["OpenAI", "Anthropic Claude", "Google Gemini", "ElevenLabs", "Deepgram", "Twilio", "Whisper", "Resemble", "Kimi"].map((p) => (
                  <span
                    key={p}
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#fff",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 100,
                      padding: "5px 14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3 feature cards */}
          <div className="flex flex-col md:flex-row" style={{ gap: 16 }}>
            <FeatureCard
              color="#ef7b16"
              icon={<KeyIcon />}
              title={t("orchestrator.card1_title")}
              desc={t("orchestrator.card1_desc")}
            />
            <FeatureCard
              color="#8a43e1"
              icon={<SlidersIcon />}
              title={t("orchestrator.card2_title")}
              desc={t("orchestrator.card2_desc")}
            />
            <FeatureCard
              color="#27b32c"
              icon={<ShieldIcon />}
              title={t("orchestrator.card3_title")}
              desc={t("orchestrator.card3_desc")}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
