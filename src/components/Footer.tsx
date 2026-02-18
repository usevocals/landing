export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111", padding: "100px 40px 0" }}>
      <div
        className="flex items-center justify-between"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "30px 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p style={{ fontSize: 17, fontWeight: 500, color: "#808080" }}>
          &copy; 2025 Vocals. All rights reserved.
        </p>
        <a
          href="/privacy-policy"
          className="hover:opacity-80 transition-opacity"
          style={{ fontSize: 17, fontWeight: 500, color: "#808080" }}
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
