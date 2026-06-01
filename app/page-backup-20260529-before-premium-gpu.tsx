const navItems = ["HOME", "GPU NETWORK", "AI FACTORY", "TOKENOMICS", "STAKING"];

const stats = [
  ["48", "CONNECTED GPUS"],
  ["152.6", "TFLOPS"],
  ["236", "AI TASKS"],
  ["99.7%", "UPTIME"],
];

const gpuNodes = [
  ["NODE 01", "2x RTX 3090", "ONLINE"],
  ["NODE 02", "RTX 3080", "ONLINE"],
  ["NODE 03", "4x RTX 3060", "ONLINE"],
];

const tokenomics = [
  ["40%", "GPU Network"],
  ["25%", "Presale"],
  ["20%", "Staking"],
  ["15%", "Ecosystem"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020403] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_45%_0%,rgba(132,255,0,.18),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(0,255,160,.10),transparent_28%)]" />

      <header className="relative z-20 border-b border-lime-400/20 bg-black/90 backdrop-blur-xl">
        <div className="max-w-[1580px] mx-auto px-6 py-3 flex items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-lime-400/70 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,.60)]">
              <img
                src="/awf_neon_wolf.png"
                alt="AWF"
                className="w-18 h-18 object-contain"
              />
            </div>

            <div>
              <div className="text-2xl font-black text-lime-400 leading-none">
                ALPHA WOLF
              </div>
              <div className="text-[11px] tracking-[4px] text-lime-300">
                TOKEN (AWF)
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex gap-8 text-xs font-black text-gray-200">
            {navItems.map((item) => (
              <a key={item} href="#" className="hover:text-lime-400 transition">
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden sm:block px-6 py-3 rounded-xl bg-lime-400 text-black text-sm font-black shadow-[0_0_28px_rgba(163,230,53,.55)]">
            CONNECT WALLET
          </button>
        </div>
      </header>

      <section className="relative z-10 max-w-[1580px] mx-auto px-6 py-4 grid xl:grid-cols-[1.25fr_.85fr] gap-5">
        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-5 shadow-[0_0_60px_rgba(132,255,0,.12)]">
          <div className="grid lg:grid-cols-[.92fr_1.08fr] gap-5 items-center">
            <div>
              <div className="inline-flex px-4 py-2 rounded-full border border-lime-400/30 text-lime-400 text-[10px] font-black tracking-[4px]">
                AI • GPU • DEFI
              </div>

              <p className="mt-4 tracking-[6px] text-gray-300 text-xs">
                WELCOME TO
              </p>

              <h1 className="mt-2 text-[34px] md:text-[44px] xl:text-[50px] font-black leading-[0.92] tracking-tight">
                ALPHA WOLF
                <span className="block text-lime-400 drop-shadow-[0_0_25px_rgba(163,230,53,.65)]">
                  TOKEN (AWF)
                </span>
              </h1>

              <p className="mt-4 text-[15px] text-gray-200 leading-relaxed max-w-[500px]">
                GPU-powered crypto ecosystem for AI compute, rendering utility,
                decentralized infrastructure and community growth.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 max-w-[420px] text-xs">
                <div className="rounded-xl border border-lime-400/20 bg-lime-400/5 px-4 py-3">
                  <span className="text-lime-400 font-black">● LIVE</span>
                  <div className="text-gray-400 mt-1">GPU Infrastructure</div>
                </div>

                <div className="rounded-xl border border-lime-400/20 bg-lime-400/5 px-4 py-3">
                  <span className="text-lime-400 font-black">AI READY</span>
                  <div className="text-gray-400 mt-1">Compute Layer</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <button className="px-6 py-3.5 rounded-xl bg-lime-400 text-black font-black shadow-[0_0_25px_rgba(163,230,53,.45)]">
                  JOIN THE PACK
                </button>

                <button className="px-6 py-3.5 rounded-xl border border-lime-400/70 text-lime-400 font-black hover:bg-lime-400 hover:text-black transition">
                  EXPLORE ECOSYSTEM
                </button>
              </div>
            </div>

            <div className="relative min-h-[360px] rounded-3xl border border-lime-400/20 bg-[radial-gradient(circle_at_50%_42%,rgba(132,255,0,.32),transparent_58%)] overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(132,255,0,.055)_1px,transparent_1px),linear-gradient(rgba(132,255,0,.055)_1px,transparent_1px)] bg-[size:44px_44px]" />

              <img
                src="/awf_neon_wolf.png"
                alt="Alpha Wolf"
                className="absolute left-1/2 top-[42%] w-[390px] xl:w-[455px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_0_75px_rgba(132,255,0,.85)]"
              />

              <div className="absolute top-4 left-4 rounded-xl border border-lime-400/25 bg-black/70 px-4 py-2 text-xs text-lime-400 font-black">
                GPU NODE ACTIVE
              </div>

              <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-emerald-400/40 bg-black/85 p-3 backdrop-blur-md shadow-[0_0_25px_rgba(16,185,129,.18)]">
                <div className="flex items-center justify-between">
                  <div className="font-black text-lime-400">ALPHA WOLF AI</div>
                  <div className="text-xs text-lime-300">● ONLINE</div>
                </div>
                <p className="text-sm text-gray-300 mt-1">
                  AI assistant module ready for ecosystem support.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {stats.map(([num, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-lime-400/15 bg-lime-400/5 p-3"
              >
                <div className="text-xl font-black text-lime-400">{num}</div>
                <div className="text-[10px] text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-lime-400/30 bg-black/75 p-5 shadow-[0_0_45px_rgba(132,255,0,.13)]">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-[36px] font-black text-lime-400 leading-none">
              AWF PRESALE
            </h2>
            <span className="rounded-lg border border-lime-400/70 px-3 py-1 text-xs text-lime-300">
              STAGE 1
            </span>
          </div>

          <p className="mt-5 text-sm text-gray-300">UNTIL PRICE INCREASE</p>

          <div className="grid grid-cols-4 gap-3 mt-3">
            {["15D", "08H", "42M", "18S"].map((x) => (
              <div
                key={x}
                className="rounded-xl border border-white/10 bg-zinc-900 p-3 text-center text-sm font-black"
              >
                {x}
              </div>
            ))}
          </div>

          <div className="mt-5 h-4 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-1/4 bg-lime-400 shadow-[0_0_18px_rgba(163,230,53,.85)]" />
          </div>

          <div className="mt-3 flex justify-between text-sm font-black">
            <span className="text-lime-400">$125,420 / $500,000</span>
            <span className="text-lime-400">25%</span>
          </div>

          <div className="mt-5 rounded-2xl border border-lime-400/15 bg-lime-400/5 p-4">
            <div className="flex justify-between text-lg font-black">
              <span>1 AWF</span>
              <span className="text-lime-400">$0.10</span>
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-300">
              <span>Next Stage</span>
              <span>$0.15</span>
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-300">PAY WITH</p>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {["AVAX", "ETH", "USDT"].map((x) => (
              <button
                key={x}
                className="rounded-xl border border-white/10 bg-zinc-900 py-3.5 font-black hover:border-lime-400/70 transition"
              >
                {x}
              </button>
            ))}
          </div>

          <button className="mt-5 w-full rounded-xl bg-lime-400 py-[18px] text-lg font-black text-black shadow-[0_0_24px_rgba(163,230,53,.45)]">
            CONNECT WALLET
          </button>

          <p className="mt-4 text-xs leading-relaxed text-gray-400">
            Presale will be activated after smart contract, audit and security
            checks are completed.
          </p>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl border border-lime-400/15 bg-lime-400/5 p-3">
              <div className="text-lime-400 font-black">61M</div>
              <div className="text-[9px] text-gray-400">SUPPLY</div>
            </div>
            <div className="rounded-xl border border-lime-400/15 bg-lime-400/5 p-3">
              <div className="text-lime-400 font-black">AVAX</div>
              <div className="text-[9px] text-gray-400">CHAIN</div>
            </div>
            <div className="rounded-xl border border-lime-400/15 bg-lime-400/5 p-3">
              <div className="text-lime-400 font-black">LOCK</div>
              <div className="text-[9px] text-gray-400">SECURE</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="relative z-10 max-w-[1580px] mx-auto px-6 pb-10 grid lg:grid-cols-3 gap-5">
        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-lime-400">GPU NETWORK</h2>
            <span className="text-xs text-lime-300">LIVE ●</span>
          </div>

          <div className="mt-5 grid gap-3">
            {gpuNodes.map(([name, gpu, status]) => (
              <div
                key={name}
                className="rounded-2xl border border-lime-400/15 bg-zinc-950 p-4 flex items-center justify-between"
              >
                <div>
                  <div className="font-black text-sm">{name}</div>
                  <div className="text-xs text-gray-400 mt-1">{gpu}</div>
                </div>
                <div className="text-xs text-lime-400">{status}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-5">
          <h2 className="text-xl font-black text-lime-400">AI FACTORY</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Build AI agents, automation tools and rendering workloads powered by
            the Alpha Wolf GPU ecosystem.
          </p>

          <div className="mt-6 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5">
            <div className="text-sm text-gray-400">MODULE STATUS</div>
            <div className="mt-2 text-2xl font-black text-lime-400">
              READY FOR DEPLOYMENT
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-lime-400/20 bg-black/60 p-5">
          <h2 className="text-xl font-black text-lime-400">TOKENOMICS</h2>

          <div className="mt-5 grid gap-3">
            {tokenomics.map(([percent, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-lime-400/15 bg-lime-400/5 p-4"
              >
                <div className="flex justify-between font-black">
                  <span>{label}</span>
                  <span className="text-lime-400">{percent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}