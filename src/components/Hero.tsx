import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ padding: "50px 40px 100px", minHeight: 660 }}
    >
      {/* Background with colored blurred blobs */}
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: "#f4f2f1" }}>
        {/* Colored blobs container */}
        <div className="absolute inset-0" style={{ overflow: "hidden" }}>
          {/* Purple blob */}
          <div
            className="absolute"
            style={{
              width: 207, height: 207, borderRadius: "50%",
              backgroundColor: "rgb(138, 67, 225)",
              top: 207, left: "calc(50% - 200px)",
              filter: "blur(200px)",
            }}
          />
          {/* Pink blob */}
          <div
            className="absolute"
            style={{
              width: 207, height: 207, borderRadius: "50%",
              backgroundColor: "rgb(213, 17, 253)",
              top: 363, left: "calc(50% - 160px)",
              filter: "blur(200px)",
            }}
          />
          {/* Orange blob */}
          <div
            className="absolute"
            style={{
              width: 207, height: 207, borderRadius: "50%",
              backgroundColor: "rgb(239, 123, 22)",
              top: 0, left: "calc(50% + 10px)",
              filter: "blur(200px)",
            }}
          />
          {/* Red blob */}
          <div
            className="absolute"
            style={{
              width: 207, height: 207, borderRadius: "50%",
              backgroundColor: "rgb(255, 47, 47)",
              top: 80, left: "calc(50% - 190px)",
              filter: "blur(200px)",
            }}
          />
          {/* Duplicate blobs with smaller blur for intensity */}
          <div
            className="absolute"
            style={{
              width: 207, height: 207, borderRadius: "50%",
              backgroundColor: "rgb(138, 67, 225)",
              top: 207, left: "calc(50% - 200px)",
              filter: "blur(100px)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: 207, height: 207, borderRadius: "50%",
              backgroundColor: "rgb(213, 17, 253)",
              top: 363, left: "calc(50% - 160px)",
              filter: "blur(100px)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: 207, height: 207, borderRadius: "50%",
              backgroundColor: "rgb(239, 123, 22)",
              top: 0, left: "calc(50% + 10px)",
              filter: "blur(100px)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: 207, height: 207, borderRadius: "50%",
              backgroundColor: "rgb(255, 47, 47)",
              top: 80, left: "calc(50% - 190px)",
              filter: "blur(100px)",
            }}
          />
        </div>

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0"
          style={{ mixBlendMode: "overlay", opacity: 0.75 }}
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

        {/* Top fade to bg */}
        <div
          className="absolute inset-x-0 top-0"
          style={{
            height: 415,
            background: "linear-gradient(rgb(242,240,238) 0%, rgba(242,240,238,0) 100%)",
            zIndex: 2,
          }}
        />
        {/* Bottom fade to bg */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "100%",
            background: "linear-gradient(rgba(242,240,238,0) 0%, rgb(242,240,238) 100%)",
            zIndex: 2,
          }}
        />
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
              Successful customer calls
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-heading"
            style={{
              fontSize: 64,
              fontWeight: 600,
              lineHeight: "76.8px",
              color: "#111",
              textAlign: "center",
              maxWidth: 847,
            }}
          >
            Give your customers a voice.
            <br />
            On an infinite scale.
          </h1>
        </div>

        {/* Subtitle + Form area */}
        <div className="flex flex-col items-center" style={{ gap: 20, width: 800 }}>
          <p
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#3d3d3d",
              lineHeight: "27px",
            }}
          >
            A platform designed to transform conversations into results.
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
                  placeholder="name@email.com"
                  className="w-full h-full bg-transparent outline-none text-center"
                  style={{ fontSize: 14, padding: 12, color: "#999" }}
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#333",
                  borderRadius: 10,
                  width: 240,
                  height: 40,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
