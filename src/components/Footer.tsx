import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="section-px" style={{ backgroundColor: "#111", paddingTop: 70, paddingBottom: 0 }}>
      <div
        className="flex flex-col md:flex-row items-center md:justify-between gap-4"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "30px 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p style={{ fontSize: 17, fontWeight: 500, color: "#808080" }}>
          {t("footer.copyright")}
        </p>
        <a
          href="/privacy-policy"
          className="hover:opacity-80 transition-opacity"
          style={{ fontSize: 17, fontWeight: 500, color: "#808080" }}
        >
          {t("footer.privacy")}
        </a>
      </div>
    </footer>
  );
}
