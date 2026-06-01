const navItems = ["HOME", "GPU NETWORK", "AI FACTORY", "TOKENOMICS", "STAKING"];

const stats = [
  ["48", "CONNECTED GPUS"],
  ["152.6", "TFLOPS POWER"],
  ["236", "AI TASKS"],
  ["99.7%", "UPTIME"],
];

const payments = [
  ["AVAX", "/avax.png"],
  ["ETH", "/eth.png"],
  ["USDT", "/usdt.png"],
];

const gpuStats = [
  ["48", "LIVE GPUS"],
  ["24/7", "COMPUTE"],
  ["AI", "READY"],
];

const aiModules = [
  ["AI AGENTS", "Autonomous Systems"],
  ["RENDERING", "GPU Rendering"],
  ["INFERENCE", "AI Models"],
];

const tokenomics = [
  ["GPU NETWORK", "40%"],
  ["PRESALE", "25%"],
  ["STAKING", "20%"],
  ["ECOSYSTEM", "15%"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020403] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_8%,rgba(132,255,0,.15),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(0,255,140,.08),transparent_30%)]" />

      <header className="relative z-20 h-[99px] border-b border-lime-400/20 bg-black/95">
        <div className="max-w-[1580px] mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/awf_neon_wolf.png"
              alt="Alpha Wolf"
              className="w-[98px] h-[99px] object-contain drop-shadow-[0_0_68px_rgba(132,255,0,.95)]"
            />
            <div className="text-[32px] font-black text-white leading-none">
              ALPHA WOLF
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-9 text-sm font-black text-gray-100">
            {navItems.map((item, index) => {
              const href =
                item === "HOME"
                  ? "/"
                  : item === "GPU NETWORK"
                  ? "/gpu-network"
                  : item === "AI FACTORY"
                  ? "/ai-factory"
                  : item === "TOKENOMICS"
                  ? "/tokenomics"
                  : "/staking";

              return (
                <a key={item} href={href} className="relative hover:text-lime-400">
                  {item}
                  {index === 0 && (
                    <span className="absolute left-0 right-0 -bottom-3 mx-auto h-1 w-11 rounded-full bg-lime-400 shadow-[0_0_14px_rgba(132,255,0,.9)]" />
                  )}
                </a>
              );
            })}
          </nav>

          <button className="hidden sm:flex rounded-xl border border-lime-400/70 bg-black px-7 py-3 text-sm font-black text-lime-400 shadow-[0_0_26px_rgba(132,255,0,.35)]">
            CONNECT WALLET
          </button>
        </div>
      </header>

      <section className="relative z-10 max-w-[1580px] mx-auto px-6 py-4 grid xl:grid-cols-[1.18fr_.82fr] gap-4 items-start">
        <div className="relative overflow-hidden rounded-3xl border border-lime-400/25 bg-black/65 p-5 shadow-[0_0_55px_rgba(132,255,0,.12)]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(132,255,0,.035)_1px,transparent_1px),linear-gradient(rgba(132,255,0,.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

          <div className="relative grid lg:grid-cols-[.9fr_1.1fr] gap-5 items-center">
            <div className="relative z-20">
              <div className="inline-flex px-4 py-2 rounded-lg border border-lime-400/50 bg-black/55 text-lime-400 text-[11px] font-black tracking-[4px]">
                AI • GPU • DEFI
              </div>

              <p className="mt-4 tracking-[7px] text-lime-300 text-xs">
                WELCOME TO
              </p>

              <h1 className="mt-3 font-black leading-[0.9] tracking-tight">
                <span className="block text-white text-[42px] md:text-[52px] xl:text-[58px]">
                  ALPHA WOLF
                </span>
                <span className="block text-[42px] md:text-[52px] xl:text-[58px] whitespace-nowrap">
                  <span className="text-lime-400">TOKEN</span>{" "}
                  <span className="text-white text-[.72em]">(AWF)</span>
                </span>
              </h1>

              <p className="mt-5 text-[16px] text-gray-200 leading-relaxed max-w-[540px]">
                GPU-powered crypto ecosystem for AI compute, rendering utility,
                decentralized infrastructure and community growth.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 max-w-[540px] text-sm">
                <div className="rounded-xl border border-lime-400/25 bg-lime-400/5 px-4 py-3">
                  <span className="text-lime-400 font-black">● LIVE</span>
                  <div className="text-gray-400 mt-1">GPU Infrastructure</div>
                </div>

                <div className="rounded-xl border border-lime-400/25 bg-lime-400/5 px-4 py-3">
                  <span className="text-lime-400 font-black">AI READY</span>
                  <div className="text-gray-400 mt-1">Compute Layer</div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-5">
                <button className="w-[220px] py-4 rounded-xl bg-lime-400 text-black font-black shadow-[0_0_24px_rgba(132,255,0,.55)]">
                  JOIN THE PACK
                </button>

                <button className="w-[250px] py-4 rounded-xl border border-lime-400/80 text-lime-400 font-black">
                  EXPLORE ECOSYSTEM
                </button>
              </div>
            </div>

            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
  <img
    src="/neural-wolf-core.png"
    alt="Neural Wolf Core"
    className="w-full h-full object-cover object-center"
  />
</div>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {stats.map(([num, label]) => (
              <div key={label} className="rounded-2xl border border-lime-400/20 bg-black/60 p-4">
                <div className="text-2xl font-black text-lime-400">{num}</div>
                <div className="text-[10px] text-gray-300 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-lime-400/30 bg-black/75 p-4 shadow-[0_0_45px_rgba(132,255,0,.13)]">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-[38px] font-black text-lime-400 leading-none">
              AWF PRESALE
            </h2>

            <span className="rounded-lg border border-lime-400/70 px-3 py-1 text-xs text-lime-300">
              STAGE 1
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-300">UNTIL PRICE INCREASE</p>

          <div className="grid grid-cols-4 gap-3 mt-2">
            {[
              ["15D", "DAYS"],
              ["08H", "HOURS"],
              ["42M", "MINUTES"],
              ["18S", "SECONDS"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-zinc-900 p-2.5 text-center">
                <div className="text-sm font-black">{value}</div>
                <div className="text-[9px] text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 h-3 rounded-full bg-zinc-800 overflow-hidden">
            <div className="h-full w-1/4 bg-lime-400 shadow-[0_0_16px_rgba(132,255,0,.8)]" />
          </div>

          <div className="mt-2 flex justify-between text-sm font-black">
            <span>
              <span className="text-lime-400">$125,420</span>{" "}
              <span className="text-white">/ $500,000</span>
            </span>
            <span className="text-lime-400">25%</span>
          </div>

          <div className="mt-4 rounded-xl border border-lime-400/20 bg-lime-400/5 p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-black">1 AWF</div>
                <div className="text-xs text-gray-300 mt-1">
                  NEXT STAGE: <span className="text-white">$0.15</span>
                </div>
              </div>
              <div className="text-2xl font-black text-lime-400">$0.10</div>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-300">PAY WITH</p>

          <div className="mt-2 grid grid-cols-3 gap-3">
            {payments.map(([label, icon]) => (
              <button
                key={label}
                className="rounded-xl border border-white/10 bg-zinc-900 py-2.5 font-black flex items-center justify-center gap-2 hover:border-lime-400/70"
              >
                <img src={icon} alt={label} className="h-7 w-7 object-contain" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <button className="mt-3 w-full rounded-xl bg-lime-400 py-3.5 text-lg font-black text-black shadow-[0_0_24px_rgba(132,255,0,.45)]">
            CONNECT WALLET
          </button>

          <p className="mt-3 text-xs leading-relaxed text-gray-400">
            Presale will be activated after smart contract, audit and security
            checks are completed.
          </p>

          <div className="mt-3 grid grid-cols-3 gap-3 text-center">
            {[
              ["61M", "SUPPLY"],
              ["AVAX", "CHAIN"],
              ["LOCK", "SECURE"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-lime-400/15 bg-lime-400/5 p-2.5">
                <div className="text-lime-400 font-black">{value}</div>
                <div className="text-[9px] text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="relative z-10 max-w-[1580px] mx-auto px-6 pb-10 grid lg:grid-cols-[.9fr_.72fr_.9fr] gap-4 items-stretch">
        <div className="min-h-[270px] h-full rounded-3xl border border-lime-400/20 bg-black/65 p-5 flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-lime-400">GPU NETWORK</h2>
            <span className="rounded-lg border border-lime-400/50 px-3 py-1 text-[10px] font-black text-lime-400">
              ● LIVE
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            Decentralized GPU infrastructure powering AI compute, rendering and
            future ecosystem workloads.
          </p>

          <div className="mt-auto pt-5 grid grid-cols-[1fr_1fr_1fr_1.5fr] gap-3">
            {gpuStats.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4 text-center">
                <div className="text-2xl font-black text-lime-400">{value}</div>
                <div className="text-[10px] text-gray-400 mt-1">{label}</div>
              </div>
            ))}

            <button className="rounded-2xl border border-lime-400/40 bg-lime-400/5 p-4 text-sm font-black text-lime-400">
              EXPLORE
              <br />
              GPU NETWORK →
            </button>
          </div>
        </div>

        <div className="min-h-[270px] h-full rounded-3xl border border-lime-400/20 bg-black/65 p-5 flex flex-col">
          <h2 className="text-2xl font-black text-lime-400">AI FACTORY</h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            Build AI agents, automation tools and rendering workloads powered by
            the Alpha Wolf GPU ecosystem.
          </p>

          <div className="mt-auto pt-5 grid grid-cols-3 gap-3">
            {aiModules.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-3 text-center">
                <div className="text-xs font-black">{title}</div>
                <div className="mt-2 text-[10px] leading-relaxed text-gray-400">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="min-h-[270px] h-full rounded-3xl border border-lime-400/20 bg-black/65 p-5 flex flex-col">
          <h2 className="text-2xl font-black text-lime-400">TOKENOMICS</h2>

          <div className="mt-auto grid grid-cols-[1fr_135px] gap-5 items-center">
            <div className="grid gap-3">
              {tokenomics.map(([label, percent]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm font-black">
                    <span>{label}</span>
                    <span className="text-lime-400">{percent}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-lime-400" style={{ width: percent }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mx-auto h-[150px] w-[150px] rounded-full shadow-[0_0_38px_rgba(132,255,0,.5)]">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(#8cff00 0deg 144deg, #66cc00 144deg 234deg, #3f8f00 234deg 306deg, #1f4f00 306deg 360deg)",
                }}
              />

              <div className="absolute inset-[18px] rounded-full bg-black border border-lime-400/40 flex items-center justify-center">
                <img
                  src="/awf_neon_wolf.png"
                  alt="AWF"
                  className="h-[70px] w-[80px] object-contain drop-shadow-[0_0_28px_rgba(132,255,0,.9)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}