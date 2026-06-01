import Header from "@/components/Header";

export default function AiFactoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header active="ai" />

      <section
        style={{
          position: "relative",
          height: "calc(100vh - 78px)",
          backgroundImage: "url('/ai-factory-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,.90), rgba(0,0,0,.45), rgba(0,0,0,.10))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "18px 60px 22px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "760px" }}>
            <div
              style={{
                width: "fit-content",
                border: "1px solid #8cff00",
                borderRadius: 14,
                padding: "10px 22px",
                color: "#8cff00",
                background: "rgba(0,0,0,.35)",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: 4,
              }}
            >
              AI • GPU • AUTOMATION
            </div>

            <div
              style={{
                marginTop: 22,
                color: "#8cff00",
                fontSize: 21,
                fontWeight: 900,
              }}
            >
              ALPHA WOLF AI FACTORY
            </div>

            <h1
              style={{
                marginTop: 10,
                marginBottom: 0,
                fontSize: "clamp(46px, 5.4vw, 78px)",
                lineHeight: 0.9,
                fontWeight: 900,
                letterSpacing: -3,
              }}
            >
              BUILD <span style={{ color: "#8cff00" }}>AI</span>
              <br />
              TRAIN MODELS
              <br />
              <span style={{ color: "#8cff00" }}>DEPLOY</span> POWER
            </h1>

            <p
              style={{
                marginTop: 22,
                marginBottom: 0,
                fontSize: "clamp(15px, 1.05vw, 20px)",
                lineHeight: 1.45,
                color: "#f3f3f3",
                maxWidth: "690px",
              }}
            >
              Build AI agents, inference systems and render engines powered by
              the Alpha Wolf GPU Network.
            </p>

            <div
              style={{
                marginTop: 24,
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(110px, 1fr))",
                gap: 18,
                maxWidth: "720px",
              }}
            >
              {[
                ["48", "GPU NODES"],
                ["236", "AI TASKS"],
                ["152.6", "TFLOPS"],
                ["99.7%", "UPTIME"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  style={{
                    borderLeft: "2px solid rgba(132,255,0,.6)",
                    paddingLeft: 14,
                  }}
                >
                  <div
                    style={{
                      color: "#8cff00",
                      fontSize: 30,
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 11,
                      fontWeight: 800,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
              }}
            >
              {["AI AGENTS", "INFERENCE ENGINE", "RENDER ENGINE"].map(
                (item) => (
                  <button
                    key={item}
                    style={{
                      border: "1px solid #8cff00",
                      borderRadius: 14,
                      background: "rgba(0,0,0,.35)",
                      color: "#8cff00",
                      padding: "13px 24px",
                      fontSize: 13,
                      fontWeight: 900,
                    }}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}