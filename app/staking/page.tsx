"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function StakingPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020400] text-white">
      <Header active="staking" />

      <main className="relative min-h-[calc(100vh-78px)] overflow-hidden bg-[#020400]">
        <section className="relative mx-auto max-w-[1300px] px-5 py-10">
          <div className="relative overflow-hidden rounded-[34px] border border-lime-400/25 bg-black shadow-[0_0_80px_rgba(132,255,0,.12)]">
            <img
              src="/staking-bg.png"
              alt="Alpha Wolf Staking"
              className="w-full object-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30" />

            <button
              onClick={() => setOpen(true)}
              className="absolute bottom-[22.5%] right-[8.5%] z-20 h-[72px] w-[27%] rounded-2xl bg-lime-400 text-black text-xl font-black tracking-wide shadow-[0_0_35px_rgba(132,255,0,.55)] transition hover:scale-[1.02]"
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

              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-lime-400/50 bg-lime-400/10 text-4xl shadow-[0_0_35px_rgba(132,255,0,.35)]">
                🐺
              </div>

              <h2 className="text-4xl font-black text-lime-400">
                STAKING COMING SOON
              </h2>

              <p className="mt-4 text-base leading-7 text-white/75">
                AWF staking will become available after ecosystem launch,
                smart contract deployment and security audit.
              </p>

              <div className="mt-6 rounded-2xl border border-lime-400/25 bg-black/50 p-5 text-left">
                <p className="text-sm font-black tracking-[0.25em] text-lime-400">
                  NEXT STEPS
                </p>

                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  <li>• Presale completion</li>
                  <li>• AWF token launch</li>
                  <li>• Staking contract audit</li>
                  <li>• Reward pool activation</li>
                </ul>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="mt-7 w-full rounded-2xl bg-lime-400 py-4 text-lg font-black text-black shadow-[0_0_35px_rgba(132,255,0,.45)] transition hover:scale-[1.02]"
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