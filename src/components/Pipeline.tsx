import { useTranslation } from "react-i18next";

const GRADIENT = "linear-gradient(180deg, #ff2f2f 0%, #ef7b16 35.88%, #8a43e1 69.92%, #d511fd 100%)";

function StepArrow() {
  return (
    <div className="flex items-center justify-center" style={{ flexShrink: 0 }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ded8d3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="13 6 19 12 13 18" />
      </svg>
    </div>
  );
}

function StepArrowDown() {
  return (
    <div className="flex items-center justify-center" style={{ flexShrink: 0 }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ded8d3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="6 13 12 19 18 13" />
      </svg>
    </div>
  );
}

interface StepProps {
  label: string;
  desc: string;
  providers?: string;
  color?: string;
  icon: React.ReactNode;
}

function Step({ label, desc, providers, color = "#111", icon }: StepProps) {
  return (
    <div
      className="flex flex-col"
      style={{
        gap: 10,
        padding: "18px 20px",
        borderRadius: 16,
        backgroundColor: "#fff",
        border: "1.5px solid #ded8d3",
        minWidth: 150,
        flex: 1,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <div className="flex items-center" style={{ gap: 8 }}>
        <div
          className="flex items-center justify-center"
          style={{ width: 32, height: 32, borderRadius: 9, backgroundColor: color, flexShrink: 0 }}
        >
          {icon}
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#111", lineHeight: 1.2 }}>
          {label}
        </span>
      </div>
      {providers && (
        <p style={{ fontSize: 11.5, fontWeight: 600, color: "#8a43e1", letterSpacing: "0.02em" }}>
          {providers}
        </p>
      )}
      <p style={{ fontSize: 13, fontWeight: 500, color: "#4c4c4c", lineHeight: 1.5 }}>
        {desc}
      </p>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        padding: "14px 22px",
        borderRadius: 14,
        border: "1.5px solid #ded8d3",
        backgroundColor: "#fff",
        gap: 3,
        textAlign: "center",
      }}
    >
      <span
        className="font-heading"
        style={{
          fontSize: 26,
          fontWeight: 700,
          background: GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1.1,
        }}
      >
        {value}
      </span>
      <span style={{ fontSize: 12.5, fontWeight: 500, color: "#4c4c4c" }}>{label}</span>
    </div>
  );
}

// Icons
function TwilioIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
    </svg>
  );
}
function MicIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3Z"/>
    </svg>
  );
}
function SpeakerIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}
function BargeInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

export default function Pipeline() {
  const { t } = useTranslation();

  return (
    <section
      className="section-px flex justify-center"
      style={{ paddingTop: 70, paddingBottom: 70, backgroundColor: "#f4f2f1" }}
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
            {t("pipeline.badge")}
          </p>
          <h2
            className="font-heading"
            style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: 600, lineHeight: 1.2, color: "#111", maxWidth: 660 }}
          >
            {t("pipeline.title")}
          </h2>
          <p style={{ fontSize: 17, fontWeight: 500, color: "#4c4c4c", lineHeight: "25.5px", maxWidth: 560 }}>
            {t("pipeline.subtitle")}
          </p>
        </div>

        {/* Pipeline diagram */}
        <div
          style={{
            padding: "2px",
            borderRadius: 24,
            background: GRADIENT,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              borderRadius: 22,
              backgroundColor: "#faf9f8",
              padding: "32px 28px",
            }}
          >
            {/* Desktop: horizontal row | Mobile: vertical stack */}
            <div className="hidden md:flex items-center" style={{ gap: 10 }}>
              <Step
                label={t("pipeline.step_twilio")}
                desc={t("pipeline.step_twilio_desc")}
                color="#e7352b"
                icon={<TwilioIcon />}
              />
              <StepArrow />
              <Step
                label={t("pipeline.step_stt")}
                desc={t("pipeline.step_stt_desc")}
                providers="Deepgram · Whisper · Qwen"
                color="#2563eb"
                icon={<MicIcon />}
              />
              <StepArrow />
              <Step
                label={t("pipeline.step_llm")}
                desc={t("pipeline.step_llm_desc")}
                providers="OpenAI · Claude · Gemini · Kimi"
                color="#16a34a"
                icon={<BrainIcon />}
              />
              <StepArrow />
              <Step
                label={t("pipeline.step_tts")}
                desc={t("pipeline.step_tts_desc")}
                providers="ElevenLabs · OpenAI · Resemble"
                color="#7c3aed"
                icon={<SpeakerIcon />}
              />
              <StepArrow />
              <Step
                label={t("pipeline.step_twilio")}
                desc={t("pipeline.step_twilio_desc")}
                color="#e7352b"
                icon={<TwilioIcon />}
              />
            </div>

            {/* Mobile: vertical */}
            <div className="flex md:hidden flex-col items-center" style={{ gap: 8 }}>
              <Step
                label={t("pipeline.step_twilio")}
                desc={t("pipeline.step_twilio_desc")}
                color="#e7352b"
                icon={<TwilioIcon />}
              />
              <StepArrowDown />
              <Step
                label={t("pipeline.step_stt")}
                desc={t("pipeline.step_stt_desc")}
                providers="Deepgram · Whisper · Qwen"
                color="#2563eb"
                icon={<MicIcon />}
              />
              <StepArrowDown />
              <Step
                label={t("pipeline.step_llm")}
                desc={t("pipeline.step_llm_desc")}
                providers="OpenAI · Claude · Gemini · Kimi"
                color="#16a34a"
                icon={<BrainIcon />}
              />
              <StepArrowDown />
              <Step
                label={t("pipeline.step_tts")}
                desc={t("pipeline.step_tts_desc")}
                providers="ElevenLabs · OpenAI · Resemble"
                color="#7c3aed"
                icon={<SpeakerIcon />}
              />
              <StepArrowDown />
              <Step
                label={t("pipeline.step_twilio")}
                desc={t("pipeline.step_twilio_desc")}
                color="#e7352b"
                icon={<TwilioIcon />}
              />
            </div>

            {/* Barge-in banner */}
            <div
              className="flex flex-col md:flex-row items-start md:items-center"
              style={{
                marginTop: 20,
                padding: "14px 20px",
                borderRadius: 12,
                backgroundColor: "#fff",
                border: "1.5px solid #ded8d3",
                gap: 10,
              }}
            >
              <div className="flex items-center" style={{ gap: 8, flexShrink: 0 }}>
                <div
                  className="flex items-center justify-center"
                  style={{ width: 28, height: 28, borderRadius: 8, background: GRADIENT, flexShrink: 0 }}
                >
                  <BargeInIcon />
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>
                  {t("pipeline.barge_in_label")}
                </span>
              </div>
              <span style={{ fontSize: 13.5, fontWeight: 500, color: "#4c4c4c", lineHeight: 1.5 }}>
                {t("pipeline.barge_in_desc")}
              </span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center" style={{ gap: 14 }}>
          <StatPill label={t("pipeline.latency_label")} value={t("pipeline.latency_value")} />
          <StatPill label={t("pipeline.providers_label")} value={t("pipeline.providers_value")} />
          <StatPill label={t("pipeline.byok_label")} value={t("pipeline.byok_desc")} />
        </div>
      </div>
    </section>
  );
}
