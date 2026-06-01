import Header from "@/components/Header";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#020400] text-white">
      <Header active="docs" />

      <main className="mx-auto max-w-[1500px] px-6 py-10">
        <section className="mb-8 text-center">
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            PROJECT <span className="text-lime-400">LITEPAPER</span>
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-white/70 md:text-lg">
            Alpha Wolf is a GPU-powered AI ecosystem designed to support AI
            training, rendering, virtual reality, enterprise AI solutions and
            long-term utility-driven growth.
          </p>
        </section>

        <section className="overflow-hidden rounded-[34px] border border-lime-400/25 bg-black shadow-[0_0_80px_rgba(132,255,0,.12)]">
          <img
            src="/litepaper-bg.png"
            alt="Alpha Wolf Litepaper"
            className="w-full object-contain"
          />
        </section>

        <section className="mt-8 rounded-[26px] border border-white/10 bg-black/60 p-6">
          <p className="text-xs leading-6 text-white/45">
          </p>
        </section>
      </main>
    </div>
  );
}