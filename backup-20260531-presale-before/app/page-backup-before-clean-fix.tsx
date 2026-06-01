const navItems = [
  "HOME",
  "GPU NETWORK",
  "AI FACTORY",
  "TOKENOMICS",
  "STAKING",
  "ROADMAP",
  "DOCS",
];

const stats = [
  ["48", "CONNECTED GPUS"],
  ["152.6", "TFLOPS"],
  ["236", "AI TASKS"],
  ["1,842", "USERS"],
  ["2.45M", "AWF BURNED"],
  ["99.7%", "UPTIME"],
];

const nodes = [
  ["WOLF NODE #01", "2x RTX 3090", "42°C", "99.8%"],
  ["WOLF NODE #02", "RTX 3080", "39°C", "99.6%"],
  ["WOLF NODE #03", "2x RTX 3090", "41°C", "99.9%"],
  ["WOLF NODE #04", "4x RTX 3060", "38°C", "99.7%"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020403] text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(132,255,0,0.22),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(0,255,170,0.12),transparent_30%)] pointer-events-none" />

      <header className="relative z-20 border-b border-lime-400/20 bg-black/60 backdrop-blur-xl">
        <div className="max-w-[1500px] mx-auto px-4 md:px-5 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-lime-400 bg-lime-400/10 flex items-center justify-center shadow-[0_0_25px_rgba(163,230,53,.6)]">
              <img
                src="/awf_neon_wolf.png"
                alt="Alpha Wolf"
                className="w-9 h-9 object-contain"
              />
            </div>

            <div>
              <div className="text-xl md:text-2xl font-black text-lime-400 leading-none">
                ALPHA WOLF
              </div>
              <div className="text-[10px] md:text-xs tracking-[3px] md:tracking-[4px] text-lime-300">
                TOKEN (AWF)
              </div>
            </div>
          </div>

          <nav className="hidden xl:flex gap-7 text-sm font-bold">
            {navItems.map((item) => (
              <a key={item} className="hover:text-lime-400 transition" href="#">
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden sm:block px-5 md:px-6 py-3 rounded-xl bg-lime-400 text-black font-black shadow-[0_0_25px_rgba(163,230,53,.7)]">
            CONNECT WALLET
          </button>
        </div>
      </header>

      <section className="relative z-10 max-w-[1500px] mx-auto px-4 md:px-5 py-8 md:py-10 grid xl:grid-cols-[1.15fr_.55fr] gap-6">
        <div className="rounded-3xl border border-lime-400/20 bg-black/45 p-5 md:p-10 shadow-[0_0_60px_rgba(132,255,0,.12)]">
          <div className="grid lg:grid-cols-[1fr_.85fr] gap-8 items-center">
            <div>
              <div className="inline-flex px-4 py-2 rounded-full border border-lime-400/30 text-lime-400 text-xs font-black tracking-[4px] mb-6">
                AI • GPU • DEFI
              </div>

              <p className="tracking-[6px] md:tracking-[8px] text-gray-300 mb-3">
                WELCOME TO
              </p>

              <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-none">
                ALPHA WOLF
                <span className="block text-lime-400 drop-shadow-[0_0_25px_rgba(163,230,53,.7)]">
                  TOKEN (AWF)
                </span>
              </h1>

              <p className="text-lg md:text-2xl mt-7 text-gray-200 leading-relaxed">
                Born to lead the pack.
                <br />
                <span className="text-lime-400 font-bold">GPU-powered</span>{" "}
                AI compute, rendering and utility ecosystem.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <button className="px-7 md:px-8 py-4 rounded-xl bg-lime-400 text-black font-black shadow-[0_0_25px_rgba(163,230,53,.45)]">
                  🐾 JOIN THE PACK
                </button>
                <button className="px-7 md:px-8 py-4 rounded-xl border border-lime-400 text-lime-400 font-black">
                  ▶ WATCH TRAILER
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10">
                {[
                  "REAL GPU POWER",
                  "AI & RENDER",
                  "REAL COMMUNITY",
                  "UTILITY FIRST",
                  "TRANSPARENT",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4"
                  >
                    <div className="text-lime-400 text-2xl">✦</div>
                    <div className="text-xs font-black mt-2">{x}</div>
                    <div className="text-[11px] text-gray-400 mt-1">
                      Built for long-term.
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[520px] lg:min-h-[640px] rounded-3xl border border-lime-400/20 bg-[radial-gradient(circle,rgba(132,255,0,.25),transparent_58%)] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(132,255,0,.07)_1px,transparent_1px),linear-gradient(rgba(132,255,0,.07)_1px,transparent_1px)] bg-[size:42px_42px]" />

              <img
                src="/awf_neon_wolf.png"
                alt="Alpha Wolf"
                className="relative z-10 w-[300px] sm:w-[380px] md:w-[460px] lg:w-[520px] max-w-[88%] object-contain drop-shadow-[0_0_55px_rgba(132,255,0,.75)]"
              />

              <div className="absolute left-4 right-4 bottom-4 lg:left-auto lg:right-6 lg:bottom-6 lg:w-[320px] rounded-2xl border border-emerald-400/60 bg-black/85 p-5 backdrop-blur shadow-[0_0_35px_rgba(16,185,129,.25)] z-20">
                <div className="text-lime-400 font-black">ALPHA WOLF AI</div>
                <div className="text-xs text-lime-300 mt-1">● ONLINE</div>

                <p className="text-sm mt-4 text-gray-200">
                  Welcome! I’m Alpha, your AI assistant. How can I help you
                  today?
                </p>

                {[
                  "What is AWF?",
                  "How does AI Factory work?",
                  "Show me the GPU network",
                ].map((q) => (
                  <button
                    key={q}
                    className="w-full mt-3 border border-lime-400/40 rounded-lg px-3 py-2 text-left text-xs text-lime-300 hover:bg-lime-400/10 transition"
                  >
                    {q}
                  </button>
                ))}

                <div className="mt-4 flex gap-2">
                  <input
                    className="w-full bg-zinc-900 rounded-lg px-3 py-2 text-xs outline-none"
                    placeholder="Ask me anything..."
                  />
                  <button className="bg-lime-400 text-black rounded-lg px-3 font-black">
                    ➤
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-6">
            {stats.map(([num, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-lime-400/20 bg-black/50 p-5"
              >
                <div className="text-3xl font-black text-lime-400">{num}</div>
                <div className="text-xs text-gray-400 mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-lime-400/30 bg-black/70 p-6 md:p-7 shadow-[0_0_50px_rgba(132,255,0,.15)]">
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-black text-lime-400">
              AWF PRESALE
            </h2>
            <span className="border border-lime-400 rounded-lg px-3 py-1 text-lime-300 text-xs">
              STAGE 1
            </span>
          </div>

          <p className="mt-6 text-gray-300 text-sm">UNTIL PRICE INCREASE</p>

          <div className="grid grid-cols-4 gap-3 mt-3">
            {["15 DAYS", "08 HRS", "42 MIN", "18 SEC"].map((x) => (
              <div
                key={x}
                className="rounded-xl border border-white/10 bg-zinc-900 p-3 md:p-4 text-center font-black text-xs md:text-sm"
              >
                {x}
              </div>
            ))}
          </div>

          <div className="h-4 bg-zinc-800 rounded-full mt-7 overflow-hidden">
            <div className="h-full w-1/4 bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,.8)]" />
          </div>

          <div className="flex justify-between mt-4 font-black text-sm md:text-base">
            <span className="text-lime-400">$125,420 / $500,000</span>
            <span className="text-lime-400">25%</span>
          </div>

          <div className="mt-7 flex justify-between gap-4 text-lg md:text-xl">
            <span>1 AWF = $0.10</span>
            <span>
              NEXT: <b className="text-lime-400">$0.15</b>
            </span>
          </div>

          <p className="mt-7 text-gray-300 text-sm">PAY WITH</p>

          <div className="grid grid-cols-3 gap-3 mt-3">
            {["AVAX", "ETH", "USDT"].map((x) => (
              <button
                key={x}
                className="rounded-xl border border-white/10 bg-zinc-900 py-4 font-black hover:border-lime-400/60 transition"
              >
                {x}
              </button>
            ))}
          </div>

          <button className="w-full mt-6 py-5 rounded-xl bg-lime-400 text-black font-black text-lg shadow-[0_0_25px_rgba(163,230,53,.5)]">
            CONNECT WALLET
          </button>

          <p className="text-xs text-gray-400 mt-5 leading-relaxed">
            Presale will be activated after smart contract, audit and security
            checks are completed.
          </p>
        </aside>
      </section>

      <section className="relative z-10 max-w-[1500px] mx-auto px-4 md:px-5 pb-10 grid xl:grid-cols-[1.5fr_.9fr_.45fr] gap-6">
        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-6">
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <h2 className="text-2xl font-black text-lime-400">
              LIVE GPU NETWORK ●
            </h2>
            <span className="text-lime-400 font-bold text-sm">
              VIEW ALL NODES →
            </span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {nodes.map(([name, gpu, temp, uptime]) => (
              <div
                key={name}
                className="rounded-2xl border border-lime-400/20 bg-zinc-950 p-4"
              >
                <div className="font-black">{name}</div>
                <div className="h-20 rounded-xl bg-[radial-gradient(circle,rgba(132,255,0,.2),transparent_60%)] mt-4 flex items-center justify-center text-5xl">
                  ▰
                </div>
                <div className="text-lime-400 text-xs mt-4">● ONLINE</div>
                <div className="text-sm mt-3 text-gray-300">GPU: {gpu}</div>
                <div className="text-sm text-gray-300">TEMP: {temp}</div>
                <div className="text-sm text-gray-300">UPTIME: {uptime}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-6">
          <h2 className="text-2xl font-black text-lime-400">
            AI FACTORY{" "}
            <span className="text-xs border border-lime-400 rounded px-2">
              BETA
            </span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Create, train and deploy your own AI with the power of Alpha Wolf
            GPU network.
          </p>

          <div className="text-8xl text-center my-8 drop-shadow-[0_0_25px_rgba(0,255,200,.7)]">
            🧠
          </div>

          <button className="border border-lime-400 text-lime-400 rounded-xl px-6 py-4 font-black hover:bg-lime-400 hover:text-black transition">
            LAUNCH AI FACTORY
          </button>
        </div>

        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-6">
          <h2 className="text-xl font-black">TOP COUNTRIES</h2>

          {[
            "🇹🇷 Türkiye 14",
            "🇺🇸 USA 8",
            "🇩🇪 Germany 5",
            "🇨🇦 Canada 3",
            "🇬🇧 UK 2",
          ].map((x) => (
            <div key={x} className="mt-5 text-gray-300">
              {x}
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-lime-400/20 py-8 text-center text-gray-400 px-4">
        © 2026 Alpha Wolf. Built for decentralized GPU infrastructure.
      </footer>
    </main>
  );
}