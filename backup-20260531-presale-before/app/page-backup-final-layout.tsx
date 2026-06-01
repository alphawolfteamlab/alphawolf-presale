const navItems = ["HOME", "GPU NETWORK", "AI FACTORY", "TOKENOMICS", "STAKING", "ROADMAP", "DOCS"];

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
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(140,255,0,.18),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(0,255,170,.10),transparent_28%)]" />

      <header className="relative z-20 border-b border-lime-400/20 bg-black/75 backdrop-blur-xl">
        <div className="max-w-[1500px] mx-auto px-5 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-lime-400 bg-lime-400/10 flex items-center justify-center shadow-[0_0_25px_rgba(163,230,53,.5)] overflow-hidden">
              <img src="/awf_neon_wolf.png" alt="Alpha Wolf" className="w-11 h-11 object-contain" />
            </div>

            <div>
              <div className="text-2xl font-black text-lime-400 leading-none">ALPHA WOLF</div>
              <div className="text-xs tracking-[6px] text-lime-300">TOKEN (AWF)</div>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-8 text-sm font-black">
            {navItems.map((item) => (
              <a key={item} href="#" className="hover:text-lime-400 transition">
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden md:block px-8 py-4 rounded-xl bg-lime-400 text-black font-black shadow-[0_0_30px_rgba(163,230,53,.7)]">
            CONNECT WALLET
          </button>
        </div>
      </header>

      <section className="relative z-10 max-w-[1500px] mx-auto px-5 py-10 grid xl:grid-cols-[1.28fr_.52fr] gap-6">
        <div className="rounded-3xl border border-lime-400/20 bg-black/50 p-6 md:p-8 shadow-[0_0_60px_rgba(132,255,0,.12)]">
          <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-6 items-center">
            <div>
              <div className="inline-flex px-5 py-2 rounded-full border border-lime-400/40 text-lime-400 text-xs font-black tracking-[5px] mb-7">
                AI • GPU • DEFI
              </div>

              <p className="tracking-[9px] text-gray-300 mb-4 text-sm">WELCOME TO</p>

              <h1 className="text-[16px] md:text-[28px] xl:text-[34px] font-black leading-[0.94] tracking-tight">
                ALPHA WOLF
                <br />
                <span className="text-lime-400 drop-shadow-[0_0_25px_rgba(163,230,53,.65)]">
                  TOKEN (AWF)
                </span>
              </h1>

              <p className="text-xl mt-7 text-gray-200 leading-relaxed max-w-[560px]">
                Born to lead the pack.
                <br />
                <span className="text-lime-400 font-black">GPU-powered</span> AI compute, rendering and utility ecosystem.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="px-8 py-4 rounded-xl bg-lime-400 text-black font-black shadow-[0_0_25px_rgba(163,230,53,.45)]">
                  🐾 JOIN THE PACK
                </button>
                <button className="px-8 py-4 rounded-xl border border-lime-400 text-lime-400 font-black">
                  ▶ WATCH TRAILER
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
                {["REAL GPU POWER", "AI & RENDER", "REAL COMMUNITY", "UTILITY FIRST", "TRANSPARENT"].map((x) => (
                  <div key={x} className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4">
                    <div className="text-lime-400 text-2xl">✦</div>
                    <div className="text-xs font-black mt-2">{x}</div>
                    <div className="text-[11px] text-gray-400 mt-1">Built for performance.</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[610px] rounded-3xl border border-lime-400/20 bg-[radial-gradient(circle_at_50%_52%,rgba(132,255,0,.32),transparent_55%)] overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(132,255,0,.08)_1px,transparent_1px),linear-gradient(rgba(132,255,0,.08)_1px,transparent_1px)] bg-[size:54px_54px]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/awf_neon_wolf.png"
                  alt="Alpha Wolf"
                  className="w-[700px] md:w-[850px] xl:w-[980px] translate-x-[-80px] translate-y-[-20px]"
                />
              </div>

              <div className="absolute right-[-20px] top-[55%] -translate-y-1/2 w-[310px] rounded-2xl border border-emerald-400/50 bg-black/85 p-5 shadow-[0_0_35px_rgba(16,185,129,.22)] backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div className="text-lime-400 font-black text-lg">ALPHA WOLF AI</div>
                  <div className="text-xs text-lime-300">● ONLINE</div>
                </div>

                <p className="text-sm mt-4 text-gray-200">
                  Welcome! I’m Alpha, your AI assistant.
                  <br />
                  How can I help you today?
                </p>

                {["What is AWF?", "How does AI Factory work?", "Show me the GPU network"].map((q) => (
                  <button
                    key={q}
                    className="w-full mt-3 border border-lime-400/40 rounded-lg px-3 py-2 text-left text-xs text-lime-300 hover:bg-lime-400/10 transition"
                  >
                    {q}
                  </button>
                ))}

                <div className="mt-4 flex gap-2">
                  <input className="w-full bg-zinc-900 rounded-lg px-3 py-3 text-xs outline-none" placeholder="Ask me anything..." />
                  <button className="bg-lime-400 text-black rounded-lg px-4 font-black">➤</button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-6">
            {stats.map(([num, label]) => (
              <div key={label} className="rounded-2xl border border-lime-400/20 bg-black/55 p-5">
                <div className="text-3xl font-black text-lime-400">{num}</div>
                <div className="text-xs text-gray-400 mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-lime-400/30 bg-black/75 p-7 shadow-[0_0_50px_rgba(132,255,0,.15)]">
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-3xl font-black text-lime-400">AWF PRESALE</h2>
            <span className="border border-lime-400 rounded-lg px-4 py-1 text-lime-300 text-xs">STAGE 1</span>
          </div>

          <p className="mt-8 text-gray-300 text-sm">UNTIL PRICE INCREASE</p>

          <div className="grid grid-cols-4 gap-3 mt-4">
            {["15 DAYS", "08 HRS", "42 MIN", "18 SEC"].map((x) => (
              <div key={x} className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-center font-black text-sm">
                {x}
              </div>
            ))}
          </div>

          <div className="h-4 bg-zinc-800 rounded-full mt-8 overflow-hidden">
            <div className="h-full w-1/4 bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,.8)]" />
          </div>

          <div className="flex justify-between mt-4 font-black">
            <span className="text-lime-400">$125,420 / $500,000</span>
            <span className="text-lime-400">25%</span>
          </div>

          <div className="mt-8 flex justify-between gap-4 text-xl">
            <span>1 AWF = $0.10</span>
            <span>
              NEXT: <b className="text-lime-400">$0.15</b>
            </span>
          </div>

          <p className="mt-8 text-gray-300 text-sm">PAY WITH</p>

          <div className="grid grid-cols-3 gap-3 mt-4">
            {["AVAX", "ETH", "USDT"].map((x) => (
              <button key={x} className="rounded-xl border border-white/10 bg-zinc-900 py-5 font-black hover:border-lime-400/70 transition">
                {x}
              </button>
            ))}
          </div>

          <button className="w-full mt-7 py-5 rounded-xl bg-lime-400 text-black font-black text-lg shadow-[0_0_25px_rgba(163,230,53,.5)]">
            CONNECT WALLET
          </button>

          <p className="text-xs text-gray-400 mt-6 leading-relaxed">
            Presale will be activated after smart contract, audit and security checks are completed.
          </p>
        </aside>
      </section>

      <section className="relative z-10 max-w-[1500px] mx-auto px-5 pb-10 grid xl:grid-cols-[1.5fr_.9fr_.45fr] gap-6">
        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-6">
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <h2 className="text-2xl font-black text-lime-400">LIVE GPU NETWORK ●</h2>
            <span className="text-lime-400 font-bold text-sm">VIEW ALL NODES →</span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {nodes.map(([name, gpu, temp, uptime]) => (
              <div key={name} className="rounded-2xl border border-lime-400/20 bg-zinc-950 p-4">
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
            AI FACTORY <span className="text-xs border border-lime-400 rounded px-2">BETA</span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Create, train and deploy your own AI with the power of Alpha Wolf GPU network.
          </p>

          <div className="text-8xl text-center my-8 drop-shadow-[0_0_25px_rgba(0,255,200,.7)]">🧠</div>

          <button className="border border-lime-400 text-lime-400 rounded-xl px-6 py-4 font-black hover:bg-lime-400 hover:text-black transition">
            LAUNCH AI FACTORY
          </button>
        </div>

        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-6">
          <h2 className="text-xl font-black">TOP COUNTRIES</h2>

          {["🇹🇷 Türkiye 14", "🇺🇸 USA 8", "🇩🇪 Germany 5", "🇨🇦 Canada 3", "🇬🇧 UK 2"].map((x) => (
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