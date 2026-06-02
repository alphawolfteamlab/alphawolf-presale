import Header from "@/components/Header";

const items = [
  ["PRESALE", "30%", "18.3M AWF presale allocation"],
  ["GPU & ECOSYSTEM", "25%", "GPU network, AI factory and ecosystem growth"],
  ["LIQUIDITY", "15%", "Market launch and exchange liquidity"],
  ["STAKING", "10%", "Future staking reward pool"],
  ["DEVELOPMENT", "10%", "Product, platform and technical development"],
  ["MARKETING", "10%", "Community growth and brand awareness"],
];

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-[#020400] text-white">
      <Header active="tokenomics" />

      <main className="relative min-h-[calc(100vh-74px)] overflow-x-hidden bg-[#020400]">
        <section className="relative mx-auto max-w-[1720px] px-4 py-6 md:px-6">
          <div className="relative overflow-hidden rounded-[34px] border border-lime-400/25 bg-black shadow-[0_0_80px_rgba(132,255,0,.12)]">
            <img
              src="/tokenomics-bg.png"
              alt="Alpha Wolf Tokenomics"
              className="block h-auto w-full object-contain"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />

            <div className="absolute left-5 top-5 z-10 rounded-2xl border border-lime-400/35 bg-black/55 px-4 py-2 backdrop-blur-md md:left-8 md:top-8 md:px-5 md:py-3">
              <p className="text-[10px] font-black tracking-[0.28em] text-lime-400 md:text-xs md:tracking-[0.35em]">
                ALPHA WOLF TOKENOMICS
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {items.map(([title, percent, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-lime-400/35 bg-black/65 p-5 shadow-[0_0_30px_rgba(132,255,0,.12)] backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-black tracking-wide text-white">
                    {title}
                  </h3>

                  <span className="text-2xl font-black text-lime-400">
                    {percent}
                  </span>
                </div>

                <p className="mt-2 text-sm text-white/65">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}