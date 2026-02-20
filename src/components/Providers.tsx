import { useTranslation } from "react-i18next";

const GRADIENT = "linear-gradient(180deg, #ff2f2f 0%, #ef7b16 35.88%, #8a43e1 69.92%, #d511fd 100%)";

function MicIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3Z" />
    </svg>
  );
}

function SpeakerIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

interface PhaseCardProps {
  title: string;
  providers: string;
  color: string;
  icon: React.ReactNode;
}

function PhaseCard({ title, providers, color, icon }: PhaseCardProps) {
  return (
    <div
      className="flex flex-col"
      style={{
        flex: 1,
        minWidth: 180,
        maxWidth: 300,
        padding: "16px 16px",
        borderRadius: 14,
        backgroundColor: "#fff",
        border: "1.5px solid #ded8d3",
        gap: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Phase header */}
      <div className="flex items-center" style={{ gap: 10 }}>
        <div
          className="flex items-center justify-center"
          style={{ width: 30, height: 30, borderRadius: 8, backgroundColor: color, color: "#fff", flexShrink: 0 }}
        >
          {icon}
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>{title}</span>
      </div>

      {/* Provider list */}
      <div className="flex flex-wrap" style={{ gap: 6 }}>
        {providers.split(", ").map((name) => (
          <span
            key={name}
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#111",
              backgroundColor: "#f4f2f1",
              borderRadius: 100,
              padding: "4px 10px",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Providers() {
  const { t } = useTranslation();

  return (
    <section
      className="section-px flex justify-center"
      style={{ paddingTop: 70, paddingBottom: 70 }}
    >
      <div style={{ maxWidth: 1240, width: "100%" }}>
        {/* Header */}
        <div className="flex flex-col items-center" style={{ gap: 12, marginBottom: 52, textAlign: "center" }}>
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
            {t("providers.badge")}
          </p>
          <h2
            className="font-heading"
            style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: 600, lineHeight: 1.2, color: "#111", maxWidth: 660 }}
          >
            {t("providers.title")}
          </h2>
          <p style={{ fontSize: 17, fontWeight: 500, color: "#4c4c4c", lineHeight: "25.5px", maxWidth: 600 }}>
            {t("providers.subtitle")}
          </p>
        </div>

        {/* Phase cards */}
        <div className="flex flex-col md:flex-row justify-center" style={{ gap: 16, marginBottom: 32 }}>
          <PhaseCard
            title={t("providers.stt_title")}
            providers={t("providers.stt_providers")}
            color="#2563eb"
            icon={<MicIcon />}
          />
          <PhaseCard
            title={t("providers.llm_title")}
            providers={t("providers.llm_providers")}
            color="#16a34a"
            icon={<BrainIcon />}
          />
          <PhaseCard
            title={t("providers.tts_title")}
            providers={t("providers.tts_providers")}
            color="#7c3aed"
            icon={<SpeakerIcon />}
          />
        </div>

        {/* Two option cards: Included vs BYOK */}
        <div className="flex flex-col md:flex-row" style={{ gap: 16, width: "80%", margin: "0 auto" }}>
          {/* Included with Vocals */}
          <div
            className="flex items-start"
            style={{
              flex: 1,
              padding: "20px 22px",
              borderRadius: 16,
              border: "2px solid transparent",
              background: `linear-gradient(#fff, #fff) padding-box, ${GRADIENT} border-box`,
              gap: 14,
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: GRADIENT,
                color: "#fff",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <CheckIcon />
            </div>
            <div className="flex flex-col" style={{ gap: 4 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>
                {t("providers.included_label")}
              </span>
              <p style={{ fontSize: 14, fontWeight: 500, color: "#4c4c4c", lineHeight: 1.5 }}>
                {t("providers.included_desc")}
              </p>
            </div>
          </div>

          {/* BYOK */}
          <div
            className="flex items-start"
            style={{
              flex: 1,
              padding: "20px 22px",
              borderRadius: 16,
              border: "1.5px solid #ded8d3",
              backgroundColor: "#fff",
              gap: 14,
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                backgroundColor: "#111",
                color: "#fff",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <KeyIcon />
            </div>
            <div className="flex flex-col" style={{ gap: 4 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>
                {t("providers.byok_label")}
              </span>
              <p style={{ fontSize: 14, fontWeight: 500, color: "#4c4c4c", lineHeight: 1.5 }}>
                {t("providers.byok_desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
