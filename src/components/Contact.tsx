import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json() as { error?: string };
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", subject: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section id="contact" className="section-px flex justify-center" style={{ paddingTop: 70, paddingBottom: 70 }}>
      <div className="flex flex-col md:flex-row gap-10 md:gap-[80px]" style={{ maxWidth: 1240, width: "100%" }}>
        {/* Left: info */}
        <div className="flex flex-col flex-1" style={{ gap: 30 }}>
          {/* Badge */}
          <div
            className="flex items-center justify-center"
            style={{
              backgroundColor: "#fff",
              borderRadius: 100,
              padding: "8px 10px",
              width: "fit-content",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>{t("contact.badge")}</span>
          </div>

          <h2
            className="font-heading"
            style={{ fontSize: "clamp(32px, 8vw, 52px)", fontWeight: 600, lineHeight: 1.2, color: "#111" }}
          >
            {t("contact.title")}
          </h2>
          <p style={{ fontSize: 17, fontWeight: 500, color: "#4c4c4c", lineHeight: "25.5px", maxWidth: 460 }}>
            {t("contact.description")}
          </p>

          {/* Contact cards */}
          <div className="flex flex-col" style={{ gap: 10 }}>
            {/* Email card */}
            <div
              style={{
                backgroundColor: "#e8e4e2",
                borderRadius: 12,
                padding: "14px 20px",
              }}
            >
              <div className="flex items-center" style={{ gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div className="flex flex-col" style={{ gap: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#4c4c4c", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {t("contact.card_email_cta")}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>contact@usevocals.com</span>
                </div>
              </div>
            </div>

            {/* Phone card */}
            <div
              style={{
                backgroundColor: "#e8e4e2",
                borderRadius: 12,
                padding: "14px 20px",
              }}
            >
              <div className="flex items-center" style={{ gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="flex flex-col" style={{ gap: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#4c4c4c", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {t("contact.card_phone_cta")}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>+34 682 78 45 20</span>
                </div>
              </div>
            </div>

            {/* Location card */}
            <div
              style={{
                backgroundColor: "#e8e4e2",
                borderRadius: 12,
                padding: "14px 20px",
              }}
            >
              <div className="flex items-center" style={{ gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="flex flex-col" style={{ gap: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#4c4c4c", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {t("contact.card_location_cta")}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>Madrid / Barcelona</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div
          className="w-full md:w-[576px]"
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            padding: 40,
            flexShrink: 0,
          }}
        >
          <h4
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#111",
              marginBottom: 30,
              fontFamily: "var(--font-body)",
            }}
          >
            {t("contact.form_title")}
          </h4>
          <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 20 }}>
            <div className="flex" style={{ gap: 16 }}>
              <div className="flex flex-col flex-1" style={{ gap: 8 }}>
                <label style={{ fontSize: 18, fontWeight: 500, color: "#111" }}>
                  {t("contact.label_name")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("contact.placeholder_name")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full outline-none"
                  style={{
                    backgroundColor: "#e8e4e2",
                    borderRadius: 12,
                    border: "none",
                    padding: "16px 20px",
                    fontSize: 16,
                    color: "#111",
                  }}
                />
              </div>
              <div className="flex flex-col flex-1" style={{ gap: 8 }}>
                <label style={{ fontSize: 18, fontWeight: 500, color: "#111" }}>
                  {t("contact.label_subject")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.placeholder_subject")}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full outline-none"
                  style={{
                    backgroundColor: "#e8e4e2",
                    borderRadius: 12,
                    border: "none",
                    padding: "16px 20px",
                    fontSize: 16,
                    color: "#111",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <label style={{ fontSize: 18, fontWeight: 500, color: "#111" }}>
                {t("contact.label_email")}
              </label>
              <input
                type="email"
                required
                placeholder={t("contact.placeholder_email")}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full outline-none"
                style={{
                  backgroundColor: "#e8e4e2",
                  borderRadius: 12,
                  border: "none",
                  padding: "16px 20px",
                  fontSize: 16,
                  color: "#111",
                }}
              />
            </div>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <label style={{ fontSize: 18, fontWeight: 500, color: "#111" }}>
                {t("contact.label_message")}
              </label>
              <textarea
                required
                rows={4}
                placeholder={t("contact.placeholder_message")}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full outline-none resize-none"
                style={{
                  backgroundColor: "#e8e4e2",
                  borderRadius: 12,
                  border: "none",
                  padding: "16px 20px",
                  fontSize: 16,
                  color: "#111",
                }}
              />
            </div>
            <div className="flex justify-center" style={{ marginTop: 10 }}>
              <button
                type="submit"
                disabled={status === "loading"}
                className="text-white hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "#111",
                  borderRadius: 12,
                  width: 240,
                  height: 55,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {status === "loading" ? t("contact.submit_sending") : t("contact.submit")}
              </button>
            </div>
            {status === "success" && (
              <p style={{ textAlign: "center", color: "#16a34a", fontSize: 15, fontWeight: 500 }}>
                {t("contact.success_message")}
              </p>
            )}
            {status === "error" && (
              <p style={{ textAlign: "center", color: "#dc2626", fontSize: 15, fontWeight: 500 }}>
                {errorMessage || t("contact.error_message")}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
