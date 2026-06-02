"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function StakingPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020400] text-white">
      <Header active="staking" />

      <main className="relative min-h-[calc(100vh-78px)] overflow-x-hidden bg-[#020400]">
        <section className="relative mx-auto max-w-[1720px] px-4 py-6 md:px-6">
          <div className="relative overflow-hidden rounded-[34px] border border-lime-400/25 bg-black shadow-[0_0_80px_rgba(132,255,0,.12)]">
            <img
              src="/staking-bg-hq.png"
              alt="Alpha Wolf Staking"
              className="block h-auto w-full object-contain"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />

            <button
              onClick={() => setOpen(true)}
              className="absolute bottom-[29%] right-[9%] z-20 h-[7%] w-[25%] rounded-2xl bg-lime-400 text-[1.2vw] font-black tracking-wide text-black shadow-[0_0_35px_rgba(132,255,0,.55)] transition hover:scale-[1.02]"
            >
              CONNECT WALLET
            </button>
          </div>
        </section>

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm">
            <div className="relative w-full max-w-[520px] rounded-[30px] border border-lime-400/45 bg-[#050800] p-8 text-center shadow-[0_0_80px_rgba(132,255,0,.25)]">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-4 text-2xl font-black text-lime-400 hover:text-white"
              >
                ×
              </button>

              <h2 className="text-4xl font-black text-lime-400">
                STAKING COMING SOON
              </h2>

              <p className="mt-4 text-base leading-7 text-white/75">
                AWF staking will become available after ecosystem launch,
                smart contract deployment and security audit.
              </p>

              <button
                onClick={() => setOpen(false)}
                className="mt-7 w-full rounded-2xl bg-lime-400 py-4 text-lg font-black text-black"
              >
                GOT IT
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}