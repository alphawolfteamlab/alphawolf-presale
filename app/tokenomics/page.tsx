import Header from "@/components/Header";

const items = [
  ["PRESALE", "15%", "Early community access"],
  ["COMMUNITY / ECOSYSTEM", "15%", "Growth round"],
  ["LIQUIDITY & MARKET LAUNCH", "60%", "Exchange liquidity and market launch"],
  ["LOCKED RESERVE", "10%", "Long-term ecosystem reserve"],
];

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-[#020400] text-white">
      <Header active="tokenomics" />

      <main className="relative min-h-[calc(100vh-74px)] overflow-hidden bg-[#020400]">
        <section className="relative mx-auto max-w-[1200px] px-4 py-6">
          <div className="relative overflow-hidden rounded-[34px] border border-lime-400/25 bg-black shadow-[0_0_80px_rgba(132,255,0,.12)]">
            <img
              src="/tokenomics-bg.png"
              alt="Alpha Wolf Tokenomics"
              className="w-full min-h-[720px] object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />

            <div className="absolute left-8 top-8 z-10 rounded-2xl border border-lime-400/35 bg-black/55 px-5 py-3 backdrop-blur-md">
              <p className="text-xs font-black tracking-[0.35em] text-lime-400">
                ALPHA WOLF TOKENOMICS
              </p>
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-10 grid grid-cols-1 gap-4 md:grid-cols-4">
              {items.map(([title, percent, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-lime-400/35 bg-black/65 p-5 backdrop-blur-md shadow-[0_0_30px_rgba(132,255,0,.12)]"
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
          </div>
        </section>
      </main>
    </div>
  );
}