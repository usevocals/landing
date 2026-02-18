import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contacto@usevocals.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
  };

  return (
    <section id="contact" className="flex justify-center" style={{ padding: "100px 40px" }}>
      <div className="flex" style={{ maxWidth: 1240, width: "100%", gap: 80 }}>
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
            <span style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>Contact</span>
          </div>

          <h2
            className="font-heading"
            style={{ fontSize: 52, fontWeight: 600, lineHeight: "62.4px", color: "#111" }}
          >
            We would love to talk to you
          </h2>
          <p style={{ fontSize: 17, fontWeight: 500, color: "#4c4c4c", lineHeight: "25.5px", maxWidth: 460 }}>
            If you want more information, support, or to explore how Vocals can
            help your business, we're here to guide you every step of the way.
          </p>

          {/* Contact cards */}
          <div className="flex flex-col" style={{ gap: 10 }}>
            {/* Email card */}
            <div
              className="flex items-center justify-between"
              style={{
                backgroundColor: "#e8e4e2",
                borderRadius: 12,
                padding: "10px 10px 10px 20px",
                height: 71,
              }}
            >
              <div className="flex items-center" style={{ gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span style={{ fontSize: 17, fontWeight: 500, color: "#111" }}>contact@usevocals.com</span>
              </div>
              <a
                href="mailto:contacto@usevocals.com"
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{
                  backgroundColor: "#111",
                  borderRadius: 8,
                  padding: "12px 14px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Contact us
              </a>
            </div>

            {/* Phone card */}
            <div
              className="flex items-center justify-between"
              style={{
                backgroundColor: "#e8e4e2",
                borderRadius: 12,
                padding: "10px 10px 10px 20px",
                height: 71,
              }}
            >
              <div className="flex items-center" style={{ gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span style={{ fontSize: 17, fontWeight: 500, color: "#111" }}>+34 682 78 45 20</span>
              </div>
              <span
                className="flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                style={{
                  backgroundColor: "#111",
                  borderRadius: 8,
                  padding: "12px 14px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Call us
              </span>
            </div>

            {/* Location card */}
            <div
              className="flex items-center justify-between"
              style={{
                backgroundColor: "#e8e4e2",
                borderRadius: 12,
                padding: "10px 10px 10px 20px",
                height: 71,
              }}
            >
              <div className="flex items-center" style={{ gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ fontSize: 17, fontWeight: 500, color: "#111" }}>Madrid/Barcelona</span>
              </div>
              <span
                className="flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                style={{
                  backgroundColor: "#111",
                  borderRadius: 8,
                  padding: "12px 14px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Come to see us
              </span>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            padding: 40,
            width: 576,
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
            Send us your inquiry
          </h4>
          <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 20 }}>
            <div className="flex" style={{ gap: 16 }}>
              <div className="flex flex-col flex-1" style={{ gap: 8 }}>
                <label style={{ fontSize: 18, fontWeight: 500, color: "#111" }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Insert name"
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
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Insert subject"
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
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Insert your email"
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
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Write your message"
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
                className="text-white hover:opacity-80 transition-opacity"
                style={{
                  backgroundColor: "#111",
                  borderRadius: 12,
                  width: 240,
                  height: 55,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
