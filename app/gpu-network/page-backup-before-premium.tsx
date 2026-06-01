const navItems = [
  ["HOME", "/"],
  ["GPU NETWORK", "/gpu-network"],
  ["AI FACTORY", "/ai-factory"],
  ["TOKENOMICS", "/tokenomics"],
  ["STAKING", "/staking"],
];

const gpuNodes = [
  {
    name: "RTX 3090 CLUSTER",
    count: "6 ACTIVE GPUS",
    vram: "144GB VRAM",
    role: "AI COMPUTE",
    status: "ONLINE",
    active: true,
  },
  {
    name: "RTX 3080 NODE",
    count: "3 ACTIVE GPUS",
    vram: "30GB VRAM",
    role: "RENDER READY",
    status: "ACTIVE",
    active: true,
  },
  {
    name: "RTX 3060 FARM",
    count: "12 ACTIVE GPUS",
    vram: "144GB VRAM",
    role: "INFERENCE READY",
    status: "LIVE",
    active: true,
  },
  {
    name: "GTX 1660 SUPER",
    count: "12 GPUS",
    vram: "72GB VRAM",
    role: "QUEUE BACKUP",
    status: "STANDBY",
    active: false,
  },
];

const workloads = [
  ["AI TASKS", "84%"],
  ["RENDER JOBS", "67%"],
  ["INFERENCE", "91%"],
  ["NETWORK LOAD", "58%"],
];

function AnimatedGpuCard({ active }: { active: boolean }) {
  return (
    <div
      className={`relative h-[210px] rounded-3xl overflow-hidden border ${
        active
          ? "border-lime-400/40 bg-lime-400/10 shadow-[0_0_45px_rgba(132,255,0,.20)]"
          : "border-white/10 bg-zinc-950"
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(132,255,0,.045)_1px,transparent_1px),linear-gradient(rgba(132,255,0,.045)_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="absolute left-6 right-6 top-8 h-[118px] rounded-2xl border border-lime-400/25 bg-black/85 shadow-inner">
        <div
          className={`absolute left-7 top-6 h-16 w-16 rounded-full border-[7px] ${
            active
              ? "border-lime-400 fan-spin shadow-[0_0_30px_rgba(132,255,0,.85)]"
              : "border-zinc-700"
          }`}
        >
          <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-current opacity-40" />
          <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-current opacity-40" />
          <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black border border-white/20" />
        </div>

        <div
          className={`absolute right-7 top-6 h-16 w-16 rounded-full border-[7px] ${
            active
              ? "border-lime-400 fan-spin shadow-[0_0_30px_rgba(132,255,0,.85)]"
              : "border-zinc-700"
          }`}
        >
          <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-current opacity-40" />
          <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-current opacity-40" />
          <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black border border-white/20" />
        </div>

        <div
          className={`absolute left-6 right-6 bottom-4 h-3 rounded-full ${
            active
              ? "bg-lime-400 led-pulse shadow-[0_0_26px_rgba(132,255,0,.9)]"
              : "bg-zinc-700"
          }`}
        />

        <div
          className={`absolute right-4 top-4 h-4 w-4 rounded-full ${
            active
              ? "bg-lime-400 led-pulse shadow-[0_0_18px_rgba(132,255,0,1)]"
              : "bg-zinc-700"
          }`}
        />
      </div>

      <div className="absolute left-6 right-6 bottom-5 flex justify-between text-[11px] font-black">
        <span className={active ? "text-lime-400" : "text-gray-500"}>
          {active ? "FANS ACTIVE" : "FANS OFF"}
        </span>
        <span className={active ? "text-lime-300" : "text-gray-500"}>
          {active ? "LED ONLINE" : "LED OFF"}
        </span>
      </div>
    </div>
  );
}

export default function GpuNetworkPage() {
  return (
    <main className="min-h-screen bg-[#020403] text-white overflow-x-hidden">
      <style>{`
        @keyframes fanRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ledPulse {
          0%, 100% { opacity: .65; }
          50% { opacity: 1; }
        }

        .fan-spin {
          animation: fanRotate .9s linear infinite;
        }

        .led-pulse {
          animation: ledPulse 1.1s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_25%_8%,rgba(132,255,0,.16),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(0,255,140,.08),transparent_30%)]" />

      <header className="relative z-20 h-[99px] border-b border-lime-400/20 bg-black/95">
        <div className="max-w-[1580px] mx-auto h-full px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-4">
            <img
              src="/awf_neon_wolf.png"
              alt="Alpha Wolf"
              className="w-[99px] h-[99px] object-contain drop-shadow-[0_0_68px_rgba(132,255,0,.95)]"
            />
            <div className="text-[32px] font-black text-white leading-none">
              ALPHA WOLF
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9 text-sm font-black text-gray-100">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`relative hover:text-lime-400 ${
                  label === "GPU NETWORK" ? "text-lime-400" : ""
                }`}
              >
                {label}
                {label === "GPU NETWORK" && (
                  <span className="absolute left-0 right-0 -bottom-3 mx-auto h-1 w-16 rounded-full bg-lime-400 shadow-[0_0_14px_rgba(132,255,0,.9)]" />
                )}
              </a>
            ))}
          </nav>

          <button className="hidden sm:flex rounded-xl border border-lime-400/70 bg-black px-7 py-3 text-sm font-black text-lime-400 shadow-[0_0_26px_rgba(132,255,0,.35)]">
            CONNECT WALLET
          </button>
        </div>
      </header>

      <section className="relative z-10 max-w-[1580px] mx-auto px-6 py-5">
        <div className="relative overflow-hidden rounded-3xl border border-lime-400/25 bg-black/65 p-6 shadow-[0_0_55px_rgba(132,255,0,.12)]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(132,255,0,.035)_1px,transparent_1px),linear-gradient(rgba(132,255,0,.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

          <div className="relative grid xl:grid-cols-[.95fr_1.05fr] gap-6 items-center">
            <div>
              <div className="inline-flex px-4 py-2 rounded-lg border border-lime-400/50 bg-black/55 text-lime-400 text-[11px] font-black tracking-[4px]">
                LIVE GPU INFRASTRUCTURE
              </div>

              <h1 className="mt-5 text-[46px] md:text-[62px] xl:text-[74px] font-black leading-[0.9]">
                GPU NETWORK
                <span className="block text-lime-400">POWER LAYER</span>
              </h1>

              <p className="mt-5 max-w-[700px] text-gray-300 text-lg leading-relaxed">
                Active GPU nodes power AI compute, rendering, inference and future
                decentralized workload distribution inside the Alpha Wolf ecosystem.
              </p>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  ["33", "TOTAL GPUS"],
                  ["390GB", "TOTAL VRAM"],
                  ["24/7", "COMPUTE"],
                  ["3", "ACTIVE CLUSTERS"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4"
                  >
                    <div className="text-3xl font-black text-lime-400">
                      {value}
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[430px] rounded-3xl border border-lime-400/25 bg-black/75 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(132,255,0,.34),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(132,255,0,.045)_1px,transparent_1px),linear-gradient(rgba(132,255,0,.045)_1px,transparent_1px)] bg-[size:36px_36px]" />

              <div className="absolute left-1/2 top-[45%] w-[520px] -translate-x-1/2 -translate-y-1/2">
                <AnimatedGpuCard active={true} />
              </div>

              <div className="absolute left-6 right-6 bottom-6 rounded-2xl border border-lime-400/35 bg-black/85 p-4">
                <div className="flex justify-between">
                  <span className="font-black text-lime-400">
                    MAIN COMPUTE NODE
                  </span>
                  <span className="text-lime-300 text-sm font-black">
                    ● ONLINE
                  </span>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Active fans, live LEDs and GPU workload routing simulation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid lg:grid-cols-4 gap-4">
          {gpuNodes.map((node) => (
            <div
              key={node.name}
              className={`rounded-3xl border p-5 ${
                node.active
                  ? "border-lime-400/25 bg-black/70 shadow-[0_0_35px_rgba(132,255,0,.10)]"
                  : "border-white/10 bg-black/50"
              }`}
            >
              <AnimatedGpuCard active={node.active} />

              <div className="mt-4 text-xl font-black text-lime-400">
                {node.name}
              </div>

              <div className="mt-3 space-y-2 text-sm text-gray-300">
                <div>{node.count}</div>
                <div>{node.vram}</div>
                <div>{node.role}</div>
              </div>

              <div
                className={`mt-5 inline-flex rounded-full border px-4 py-1 text-[10px] font-black ${
                  node.active
                    ? "border-lime-400/40 bg-lime-400/10 text-lime-400"
                    : "border-white/10 bg-zinc-900 text-gray-500"
                }`}
              >
                ● {node.status}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid lg:grid-cols-[1fr_.8fr] gap-4">
          <div className="rounded-3xl border border-lime-400/20 bg-black/65 p-5">
            <h2 className="text-2xl font-black text-lime-400">
              LIVE WORKLOAD MONITOR
            </h2>

            <div className="mt-5 grid gap-4">
              {workloads.map(([label, percent]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm font-black">
                    <span>{label}</span>
                    <span className="text-lime-400">{percent}</span>
                  </div>
                  <div className="mt-2 h-3 rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full bg-lime-400 shadow-[0_0_18px_rgba(132,255,0,.8)]"
                      style={{ width: percent }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-black/65 p-5">
            <h2 className="text-2xl font-black text-lime-400">
              GPU TASK ROUTER
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              The Alpha Wolf GPU router will distribute AI, render and inference
              jobs to the best available GPU cluster based on status, power and load.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {["AI", "RENDER", "INFERENCE"].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4"
                >
                  <div className="text-xl font-black text-lime-400">{x}</div>
                  <div className="text-[10px] text-gray-400 mt-1">READY</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-lime-400/25 bg-lime-400/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-lime-400">
              JOIN THE GPU NETWORK
            </h2>
            <p className="mt-2 text-gray-300">
              Future node operators will be able to connect GPU power to the AWF ecosystem.
            </p>
          </div>

          <button className="rounded-xl bg-lime-400 px-8 py-4 font-black text-black shadow-[0_0_24px_rgba(132,255,0,.45)]">
            APPLY FOR NODE
          </button>
        </div>
      </section>
    </main>
  );
}