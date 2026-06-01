import Header from "@/components/Header";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#020400] text-white">
      <Header active="roadmap" />

      <main className="min-h-[calc(100vh-78px)] bg-[#020400] px-4 py-6">
        <section className="mx-auto max-w-[1600px] overflow-hidden rounded-[28px] border border-lime-400/25 bg-black shadow-[0_0_80px_rgba(132,255,0,.12)]">
          <img
            src="/roadmap-premium.png"
            alt="Alpha Wolf Roadmap"
            className="block h-auto w-full object-contain"
          />
        </section>
      </main>
    </div>
  );
}